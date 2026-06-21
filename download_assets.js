const https = require("https");
const fs = require("fs");
const path = require("path");

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode !== 200 && res.statusCode !== 304) {
        return reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
      }
      let chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    }).on("error", reject);
  });
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function downloadAsset(urlPath) {
  const localPath = path.join(__dirname, urlPath);
  if (fs.existsSync(localPath)) return;
  
  console.log("Downloading", urlPath);
  try {
    const data = await fetchUrl(`https://omega.kesarcloud.in${urlPath}`);
    ensureDir(localPath);
    fs.writeFileSync(localPath, data);
    return data;
  } catch (err) {
    console.error("Failed to download", urlPath, err.message);
    return null;
  }
}

async function main() {
  // First, we need to re-fetch the latest HTML from omega.kesarcloud.in to get the LATEST hashes!
  // Because the old hashes in our index.html might already be 404 on the origin!
  const pages = [
    { name: "index.html", url: "https://omega.kesarcloud.in/" },
    { name: "pricing.html", url: "https://omega.kesarcloud.in/pricing" },
    { name: "documentation.html", url: "https://omega.kesarcloud.in/documentation" },
    { name: "status.html", url: "https://omega.kesarcloud.in/status" }
  ];

  for (const page of pages) {
    console.log("Fetching latest HTML for", page.name);
    let htmlBuffer;
    try {
      htmlBuffer = await fetchUrl(page.url);
    } catch(e) {
      console.error(e);
      continue;
    }
    let html = htmlBuffer.toString("utf-8");

    // Replace branding
    html = html.replace(/Omega Plus/g, "UnityAI");
    html = html.replace(/Omega V1/g, "UnityAI");
    html = html.replace(/omega\.kesarcloud\.in/g, "www.unityai.cloud");
    html = html.replace(/Omega/g, "UnityAI");

    // Replace pricing by 10%
    if (page.name === "pricing.html") {
      html = html.replace(/\$([0-9]+\.?[0-9]*)/g, (match, p1) => {
        let price = parseFloat(p1);
        let newPrice = price * 1.10;
        let decimals = p1.includes(".") ? p1.split(".")[1].length : 0;
        if (decimals === 0 && newPrice % 1 !== 0) decimals = 2;
        if (decimals > 4) decimals = 4;
        return "$" + newPrice.toFixed(decimals);
      });
    }

    // Extract all /_next/... links from the HTML
    const nextRegex = /\/_next\/[a-zA-Z0-9\-\.\/_]+/g;
    let match;
    const assetsToDownload = new Set();
    while ((match = nextRegex.exec(html)) !== null) {
      assetsToDownload.add(match[0]);
    }

    for (const assetUrl of assetsToDownload) {
      const assetData = await downloadAsset(assetUrl);
      // If it's a CSS file, parse it for font/media URLs
      if (assetUrl.endsWith(".css") && assetData) {
        const cssStr = assetData.toString("utf-8");
        const urlRegex = /url\(([\/_a-zA-Z0-9\-\.]+)\)/g;
        let cssMatch;
        while ((cssMatch = urlRegex.exec(cssStr)) !== null) {
          let mediaUrl = cssMatch[1];
          if (mediaUrl.startsWith("/_next/")) {
            await downloadAsset(mediaUrl);
          }
        }
      }
    }

    // Finally save the updated HTML
    fs.writeFileSync(page.name, html);
    console.log("Saved", page.name);
  }
}

main().catch(console.error);

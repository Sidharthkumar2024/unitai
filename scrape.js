const https = require("https");
const fs = require("fs");

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function main() {
  const pages = [
    { name: "index.html", url: "https://omega.kesarcloud.in/" },
    { name: "pricing.html", url: "https://omega.kesarcloud.in/pricing" },
    { name: "documentation.html", url: "https://omega.kesarcloud.in/documentation" },
    { name: "status.html", url: "https://omega.kesarcloud.in/status" }
  ];

  for (const page of pages) {
    console.log("Fetching", page.url);
    let html = await fetchUrl(page.url);
    
    // Inject <base> tag to fix relative assets
    html = html.replace("<head>", '<head><base href="https://omega.kesarcloud.in/">');
    
    // Increase pricing by 10% if it is the pricing page
    if (page.name === "pricing.html") {
      // Find prices like $1.00, $0.15, $5, etc.
      html = html.replace(/\$([0-9]+\.?[0-9]*)/g, (match, p1) => {
        let price = parseFloat(p1);
        let newPrice = price * 1.10;
        // Format to 2 decimal places if original had decimals, else heuristic
        let decimals = p1.includes(".") ? p1.split(".")[1].length : 0;
        if (decimals === 0 && newPrice % 1 !== 0) decimals = 2;
        if (decimals > 4) decimals = 4; // cap decimals
        return "$" + newPrice.toFixed(decimals);
      });
    }

    // Since these pages are being served locally, the paths inside <nav> might be absolute Next.js paths.
    // e.g. href="/pricing" needs to become href="/pricing.html" or stay as is if the server handles it.
    // Vercel static deployments automatically resolve /pricing to /pricing.html! So we don't need to change hrefs.

    fs.writeFileSync(page.name, html);
    console.log("Saved", page.name);
  }
}

main().catch(console.error);

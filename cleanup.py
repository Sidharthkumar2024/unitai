import os
import re
import shutil

# 1. Merge CSS files
css_dir = "_next/static/css"
merged_css = "styles.css"
fonts_dir = "_next/static/media"
assets_fonts_dir = "assets/fonts"

os.makedirs(assets_fonts_dir, exist_ok=True)

merged_css_content = ""
if os.path.exists(css_dir):
    for f in os.listdir(css_dir):
        if f.endswith(".css"):
            with open(os.path.join(css_dir, f), "r", encoding="utf-8") as css_file:
                merged_css_content += css_file.read() + "\n"

# 2. Move fonts and update CSS paths
if os.path.exists(fonts_dir):
    for f in os.listdir(fonts_dir):
        if f.endswith(".woff2"):
            shutil.copy(os.path.join(fonts_dir, f), os.path.join(assets_fonts_dir, f))

# Update font URLs in CSS
merged_css_content = re.sub(r"/_next/static/media/([^)]+)", r"/assets/fonts/\1", merged_css_content)

with open(merged_css, "w", encoding="utf-8") as f:
    f.write(merged_css_content)

# 3. Clean up HTML files
html_files = ["index.html", "pricing.html", "documentation.html", "status.html"]

for html_file in html_files:
    if not os.path.exists(html_file):
        continue
        
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
        
    # Remove all Next.js stylesheets
    html = re.sub(r'<link rel="stylesheet" href="/_next/static/css/[^>]+>', '', html)
    
    # Inject our single stylesheet
    if '<head>' in html:
        html = html.replace('<head>', '<head>\n<link rel="stylesheet" href="/styles.css">\n')
    
    # Remove Next.js script tags
    html = re.sub(r'<script src="/_next/static/[^>]+></script>', '', html)
    html = re.sub(r'<script[^>]*>\$RB=.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>requestAnimationFrame.*?</script>', '', html, flags=re.DOTALL)
    
    # Remove Next.js hydration wrapper tags (like <!--$--> and <div hidden id="S:0">)
    html = html.replace('<!--$-->', '')
    html = html.replace('<!--/$-->', '')
    html = html.replace('<!--?-->', '')
    html = html.replace('<!--!-->', '')
    html = re.sub(r'<div hidden[^>]*id="S:0"[^>]*>', '<div>', html)
    html = re.sub(r'<template id="B:0"></template>', '', html)
    
    # Try to make it a bit more readable by adding basic newlines
    html = html.replace('><', '>\n<')
    
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(html)

print("Cleanup successful.")

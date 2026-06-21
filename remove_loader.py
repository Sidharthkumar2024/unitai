import os
import re

files = ["index.html", "pricing.html", "documentation.html", "status.html"]

for file in files:
    if os.path.exists(file):
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Regex to find and remove the loading screen block
        # The block starts with <div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
        # and ends a few divs later.
        
        # We can just use a precise regex to remove it
        loader_regex = r'<div\s+class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950".*?<style>.*?@keyframes omega-load-bar.*?</style>.*?<div class="w-12 h-12 bg-gradient-to-tr from-\[#FF4F12\] to-\[#FF2E00\] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-500/20">\s*Ω\s*</div>.*?<div class="mt-6 relative h-0\.5 w-24 bg-slate-800 rounded-full overflow-hidden">.*?<div class="absolute top-0 h-full w-2/5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style="animation: omega-load-bar 1\.2s ease-in-out infinite"></div>\s*</div>\s*</div>'
        
        content = re.sub(loader_regex, '', content, flags=re.DOTALL)
        
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Removed loader from {file}")

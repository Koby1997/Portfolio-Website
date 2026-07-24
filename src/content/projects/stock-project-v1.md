---
title: "Stock Project V1"
description: "Data analytics platform born to try and disprove a trading theory."
categories: ["Software"]
pubDate: 2024-08-01
coverImage: "/assets/projects/stock-project/v1/FrontEnd.jpg"
heroImage: "/assets/projects/stock-project/v1/StockChartOG.jpg"
mediaFolder: "/assets/projects/stock-project/v1"
demoMode: true
---

<section class="w-full pt-32 bg-zinc-950">
<div class="max-w-[90rem] mx-auto px-4 md:px-12 mb-32">

<!-- Overview & Specs -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-32">
<div class="md:col-span-8 flex flex-col justify-center border-l-2 border-emerald-500 pl-8">
<h2 class="text-xs font-mono tracking-[0.4em] text-emerald-400 mb-6 uppercase">Overview</h2>
<p class="text-zinc-300 text-2xl leading-relaxed font-light">
This project literally started because I had a stock trading theory that I couldn't stop thinking about but also couldn't see the fallacy in it. I felt it was so simple and I am of the mindset that there is no 'Easy, get rich quick' when it comes to the stock market. I spent one weekend to do some historical data analysis just so I could prove myself wrong and stop thinking about it, but the more I looked into it, the more it seemed like the strategy could be profitable. That one weekend didn't end there and I began diving into data analytics and the stock market even more.
</p>
</div>
<div class="md:col-span-4 border-l border-zinc-800/80 pl-8 flex flex-col justify-center">
<h2 class="text-xs font-mono tracking-[0.4em] text-emerald-400 mb-6 uppercase">Key Details</h2>
<ul class="flex flex-col gap-6">
<li>
<span class="text-white font-bold block text-lg mb-1">Data Ingestion</span>
<span class="text-zinc-400 text-sm leading-relaxed">Used Python to gather and prepare market data for analysis</span>
</li>
<li>
<span class="text-white font-bold block text-lg mb-1">Custom Algorithm</span>
<span class="text-zinc-400 text-sm leading-relaxed">Gotta keep this one a secret sorrrrrry</span>
</li>
<li>
<span class="text-white font-bold block text-lg mb-1">Super basic frontend</span>
<span class="text-zinc-400 text-sm leading-relaxed">No fancy UI when I just want to see results. Vanilla JavaScript and HTML</span>
</li>
</ul>
</div>
</div>

<!-- Narrative 1: Text Left, Media Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-6 flex flex-col gap-6 text-left">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">The Database</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
This was one of the first feelings of success. This was the foundation of the data that I was wanting to collect. It had been through my onslaught of Python scripts and successfully populated the database. From here I felt confident to add more parameters and fine-tune my algorithm.
</p>
</div>
<div class="md:col-span-6 flex justify-center">
<img src="/assets/projects/stock-project/v1/Database.jpg" class="max-w-[560px] w-full h-auto rounded-2xl shadow-2xl border border-zinc-800 object-cover" />
</div>
</div>

<!-- Narrative 2: Media Left, Text Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-6 order-2 md:order-1 flex justify-center">
<img src="/assets/projects/stock-project/v1/Analysis.jpg" class="max-w-[560px] w-full h-auto rounded-2xl shadow-2xl border border-zinc-800 object-cover" />
</div>
<div class="md:col-span-6 flex flex-col gap-6 order-1 md:order-2 text-left">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">The Analysis</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
Doing hundreds of thousands of calculations per stock (if not, millions) did cause a bottleneck in terms of time. I added logging to follow the process and at first would just leave my computer to run overnight. Soon I found some major optimizations which cut the time down significantly.
</p>
</div>
</div>

<!-- Narrative 3: Text Left, Media Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-6 flex flex-col gap-6 text-left">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">The Frontend</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
After navigating through MongoDB Compass over and over, I felt like it would be great to easily see the data in a more readable format. I built a simple frontend which helped a ton when it came to analyzing the data and fine-tuning my algorithm. 
</p>
<img src="/assets/projects/stock-project/v1/StockChartOG.jpg" class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800 object-cover mt-4" />
</div>
<div class="md:col-span-6 flex justify-center">
<img src="/assets/projects/stock-project/v1/FrontEnd.jpg" class="max-w-[560px] w-full h-auto rounded-2xl shadow-2xl border border-zinc-800 object-cover" />
</div>
</div>

<!-- ========================================================= -->
<!-- SNEAK PEEK CTA (Minimalist Next Version Link)               -->
<!-- ========================================================= -->
<div class="max-w-[90rem] mx-auto px-4 md:px-12 flex justify-center mt-32">
<a href="/projects/stock-project-v2" class="group flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto bg-zinc-900/30 hover:bg-zinc-800/50 rounded-3xl border border-zinc-800/50 hover:border-emerald-500/30 p-6 md:p-8 md:px-12 transition-all duration-500 shadow-xl">
<div class="flex flex-col text-left">
<span class="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-2 group-hover:text-emerald-400 transition-colors">Sneak Peek • Next Version</span>
<h3 class="text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center justify-start gap-4">
StockViz (V2) <span class="inline-block transition-transform duration-300 group-hover:translate-x-2 text-emerald-400">→</span>
</h3>
</div>
<div class="w-full md:w-48 h-32 md:h-28 rounded-xl overflow-hidden border border-zinc-800 shadow-lg relative">
<video src="/assets/projects/stock-project/v2/ShortDemoForHero.mp4" autoplay loop muted playsinline class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"></video>
</div>
</a>
</div>

</div>
</section>

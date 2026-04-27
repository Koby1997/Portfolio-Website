---
title: "Cuttlefish Lights V1"
description: "Created at a hackathon (Won 2nd place). Initial hardware build and basic behaviors."
categories: ["Hardware", "Software"]
pubDate: 2020-02-01
coverImage: "/assets/projects/cuttlefish/v1/Cuttlefishv1hero.mp4"
mediaFolder: "/assets/projects/cuttlefish/v1"
demoMode: true
---

<!-- ========================================================= -->
<!-- THE FINAL LAYOUT: Fluid Narrative + Masonry Footer          -->
<!-- ========================================================= -->
<section class="w-full pt-32 bg-zinc-950">
<div class="max-w-[90rem] mx-auto px-4 md:px-12 mb-32">

<!-- Project Overview -->
<div class="max-w-3xl mb-32 border-l-2 border-violet-500 pl-8">
<h2 class="text-xs font-mono tracking-[0.4em] text-violet-400 mb-6 uppercase">Project Overview</h2>
<p class="text-zinc-300 text-2xl leading-relaxed font-light">
This project uses an Arduino Uno and a Sparkfun Spectrum Shield to make programmable LED lights react to music in real-time. Created during the 36-hour UF SwampHack 2020, we utilized fast-fourier transform analysis to isolate bass, mids, and treble frequencies, ultimately winning 2nd Place overall.
</p>
</div>

<!-- Narrative 1: Text Left, Media Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-5 flex flex-col gap-6">
<div class="w-16 h-1 bg-violet-500"></div>
<h3 class="text-4xl font-bold text-white">The Breakthrough</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
This is literally a video of me at 3 am the last day getting the lights to fully work and react to music. A hard weekend filled with bugs, but this moment is when all the hard work became worth it and that this project was possible.
</p>
</div>
<div class="md:col-span-7">
<video src="/assets/projects/cuttlefish/v1/FirstTimeWorking.mp4" autoplay loop muted playsinline class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800"></video>
</div>
</div>

<!-- Narrative 2: Media Left, Text Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-7 order-2 md:order-1">
<img src="/assets/projects/cuttlefish/v1/LiveDemo.jpg" class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800" />
</div>
<div class="md:col-span-5 flex flex-col gap-6 order-1 md:order-2 text-left md:text-right md:items-end">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">The Demo</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
A picture of us demoing the lights to everyone after being told we won 2nd place. This project uses an Arduino Uno and a Sparkfun Spectrum Shield.
</p>
</div>
</div>

</div>

<!-- Project Media Footer & Sneak Peek Container -->
<div class="w-full bg-black pt-24 pb-32 border-t border-zinc-900">
<div class="max-w-[90rem] mx-auto px-4 md:px-12">
<h3 class="text-3xl font-bold text-white mb-12">Additional Media</h3>
<div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
<video src="/assets/projects/cuttlefish/v1/Cuttlefishv1hero.mp4" autoplay loop muted playsinline class="w-full h-auto rounded-xl border border-zinc-800 shadow-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500"></video>
<video src="/assets/projects/cuttlefish/v1/HangingInApartment.mp4" autoplay loop muted playsinline class="w-full h-auto rounded-xl border border-zinc-800 shadow-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500"></video>
<img src="/assets/projects/cuttlefish/v1/Judging.jpg" class="w-full h-auto rounded-xl border border-zinc-800 shadow-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500" />
</div>
</div>

<!-- ========================================================= -->
<!-- SNEAK PEEK CTA (Minimalist Next Version Link)               -->
<!-- ========================================================= -->
<div class="max-w-[90rem] mx-auto px-4 md:px-12 flex justify-center mt-32">
<a href="/projects/cuttlefish-v2" class="group flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto bg-zinc-900/30 hover:bg-zinc-800/50 rounded-3xl border border-zinc-800/50 hover:border-violet-500/30 p-6 md:p-8 md:px-12 transition-all duration-500 shadow-xl">
<div class="flex flex-col text-left">
<span class="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-2 group-hover:text-violet-400 transition-colors">Sneak Peek • Next Version</span>
<h3 class="text-3xl md:text-4xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 flex items-center justify-start gap-4">
Cuttlefish V2 <span class="inline-block transition-transform duration-300 group-hover:translate-x-2 text-violet-400">→</span>
</h3>
</div>
<div class="w-full md:w-48 h-32 md:h-28 rounded-xl overflow-hidden border border-zinc-800 shadow-lg relative">
<video src="/assets/projects/cuttlefish/v2/TestDiffusion.mp4" autoplay loop muted playsinline class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"></video>
</div>
</a>
</div>
</div>

</section>

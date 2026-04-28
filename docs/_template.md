---
title: "[PROJECT TITLE]"
description: "[1-SENTENCE HOOK]"
categories: ["[CATEGORY 1]", "[CATEGORY 2]"]
pubDate: 2024-01-01
coverImage: "/assets/projects/[PATH]/[HERO_MEDIA.jpg/mp4]"
mediaFolder: "/assets/projects/[PATH]"
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
[INSERT 2-3 SENTENCE PROJECT OVERVIEW HERE]
</p>
</div>

<!-- Narrative 1: Text Left, Media Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-5 flex flex-col gap-6">
<div class="w-16 h-1 bg-violet-500"></div>
<h3 class="text-4xl font-bold text-white">[BLOCK 1 TITLE]</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
[BLOCK 1 TEXT]
</p>
</div>
<div class="md:col-span-7">
<video src="[BLOCK 1 MEDIA PATH]" autoplay loop muted playsinline class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800"></video>
<!-- IF USING AN IMAGE INSTEAD OF VIDEO, USE: <img src="[BLOCK 1 MEDIA PATH]" class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800" /> -->
</div>
</div>

<!-- Narrative 2: Media Left, Text Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-7 order-2 md:order-1">
<img src="[BLOCK 2 MEDIA PATH]" class="w-full h-auto rounded-2xl shadow-2xl border border-zinc-800" />
</div>
<div class="md:col-span-5 flex flex-col gap-6 order-1 md:order-2 text-left md:text-right md:items-end">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">[BLOCK 2 TITLE]</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
[BLOCK 2 TEXT]
</p>
</div>
</div>

</div>

<!-- Project Media Footer & Sneak Peek Container -->
<div class="w-full bg-black pt-24 pb-32 border-t border-zinc-900">
<div class="max-w-[90rem] mx-auto px-4 md:px-12">
<h3 class="text-3xl font-bold text-white mb-12">Additional Media</h3>
<div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
<!-- DUPLICATE THESE LINES FOR ALL ADDITIONAL MEDIA -->
<video src="[MEDIA PATH]" autoplay loop muted playsinline class="w-full h-auto rounded-xl border border-zinc-800 shadow-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500"></video>
<img src="[MEDIA PATH]" class="w-full h-auto rounded-xl border border-zinc-800 shadow-xl break-inside-avoid hover:scale-[1.02] transition-transform duration-500" />
</div>
</div>

<!-- ========================================================= -->
<!-- SNEAK PEEK CTA (Minimalist Next Version Link)               -->
<!-- ========================================================= -->
<!-- REMOVE THIS ENTIRE SECTION IF THERE IS NO NEXT VERSION -->
<div class="max-w-[90rem] mx-auto px-4 md:px-12 flex justify-center mt-32">
<a href="/projects/[NEXT PROJECT ID]" class="group flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto bg-zinc-900/30 hover:bg-zinc-800/50 rounded-3xl border border-zinc-800/50 hover:border-violet-500/30 p-6 md:p-8 md:px-12 transition-all duration-500 shadow-xl">
<div class="flex flex-col text-left">
<span class="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-2 group-hover:text-violet-400 transition-colors">Sneak Peek • Next Version</span>
<h3 class="text-3xl md:text-4xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 flex items-center justify-start gap-4">
[NEXT PROJECT TITLE] <span class="inline-block transition-transform duration-300 group-hover:translate-x-2 text-violet-400">→</span>
</h3>
</div>
<div class="w-full md:w-48 h-32 md:h-28 rounded-xl overflow-hidden border border-zinc-800 shadow-lg relative">
<video src="[NEXT PROJECT MEDIA PATH]" autoplay loop muted playsinline class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"></video>
<!-- IF USING AN IMAGE INSTEAD OF VIDEO, USE: <img src="[NEXT PROJECT MEDIA PATH]" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" /> -->
</div>
</a>
</div>
</div>

</section>

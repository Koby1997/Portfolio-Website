---
title: "Cuttlefish Lights V3"
description: "Created a React desktop UI and improved backend algorithms."
categories: ["Hardware", "Software"]
pubDate: 2026-03-01
coverImage: "/assets/projects/cuttlefish/v3/CoolView.mp4"
mediaFolder: "/assets/projects/cuttlefish/v3"
demoMode: true
---

<section class="w-full pt-32 bg-zinc-950">
<div class="max-w-[90rem] mx-auto px-4 md:px-12 mb-32">

<!-- Overview & Specs -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-32">
<div class="md:col-span-6 flex flex-col justify-center border-l-2 border-emerald-500 pl-8">
<h2 class="text-xs font-mono tracking-[0.4em] text-emerald-400 mb-6 uppercase">Overview</h2>
<p class="text-zinc-300 text-2xl leading-relaxed font-light">
The Cuttlefish lights were always a personal project started from a college hackathon. Many people thought they were cool, but they were just not user friendly for someone who didn't know how to code. I was completly fine with how janky the code was because I knew how it worked and didn't need to make it better.
<br />
This changed when I was told that someone wanted to gift these to their daughter. I decided I should make a user friendly app to go along with the lights.
</p>
</div>
<div class="md:col-span-3 border-l border-zinc-800/80 pl-8 flex flex-col justify-center">
<h2 class="text-xs font-mono tracking-[0.4em] text-emerald-400 mb-6 uppercase">Key Upgrades</h2>
<ul class="flex flex-col gap-6">
<li>
<span class="text-white font-bold block text-lg mb-1">Desktop UI</span>
<span class="text-zinc-400 text-sm leading-relaxed">Full React dashboard for system control</span>
</li>
<li>
<span class="text-white font-bold block text-lg mb-1">Live Behavior Switching</span>
<span class="text-zinc-400 text-sm leading-relaxed">Added serial communication so no need to reupload code to switch behaviors</span>
</li>
<li>
<span class="text-white font-bold block text-lg mb-1">Behavior reworks</span>
<span class="text-zinc-400 text-sm leading-relaxed">Improved algorithms and updated customizability</span>
</li>
</ul>
</div>
<!-- Column 3: Tech Stack -->
<div class="md:col-span-3 border-l border-zinc-800/80 pl-8 flex flex-col justify-center">
<h2 class="text-xs font-mono tracking-[0.4em] text-emerald-400 mb-6 uppercase">Architecture Stack</h2>
<ul class="flex flex-col gap-6">
<li>
<span class="text-white font-bold block text-lg">React 18 & Vite</span>
</li>
<li>
<span class="text-white font-bold block text-lg">Electron</span>
</li>
<li>
<span class="text-white font-bold block text-lg">Web Serial API</span>
</li>
<li>
<span class="text-white font-bold block text-lg">C++ (Arduino)</span>
</li>
<li>
<span class="text-white font-bold block text-lg">Tailwind CSS</span>
</li>
</ul>
</div>
</div>

<!-- Narrative 1: Text Left, Media Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-6 flex flex-col gap-6">
<div class="w-16 h-1 bg-emerald-500"></div>
<h3 class="text-4xl font-bold text-white">CuttlefishCtrl</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
Before this app was created, I had a list of behaviors commented out in the code and to get the behavior I wanted, I would have to uncomment it and reupload the code. If I wanted settings to change such as speed, direction, brightness, etc. I would have to change the values and then reupload the code. I didn't mind because I knew how everything worked and it worked for me.
<br />
This app now changes behaviors and settings live without the need to change code or reupload. It allows the user to have full control over the lights by just clicking buttons and sliders.
</p>
</div>
<div class="md:col-span-6 flex justify-center">
<img src="/assets/projects/cuttlefish/v3/CuttlefishCTRL.jpg" class="max-w-[560px] w-full h-auto rounded-2xl shadow-2xl border border-zinc-800 object-cover" />
</div>
</div>

<!-- Narrative 2: Media Left, Text Right -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
<div class="md:col-span-6 order-2 md:order-1 flex justify-center">
<video src="/assets/projects/cuttlefish/v3/CoolView.mp4" autoplay loop muted playsinline class="max-w-[560px] w-full h-auto rounded-2xl shadow-2xl border border-zinc-800"></video>
</div>
<div class="md:col-span-6 flex flex-col gap-6 order-1 md:order-2">
<div class="w-16 h-1 bg-blue-500"></div>
<h3 class="text-4xl font-bold text-white">The future of Cuttlefish</h3>
<p class="text-zinc-400 text-lg leading-relaxed">
I am unsure if this is the end of the Cuttlefish lights improvement. I am very happy with where they are at and don't see much value for improving them vs time it would take. If I do work on them in the future, the 2 things I could see myself doing are:
<br />
1) Making them wireless
<br />
2) Changing what board is used to increase memory/speed/capabilities
</p>
</div>
</div>

</div>
</section>

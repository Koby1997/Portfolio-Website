# Hero Sections - Component Library Bootstrapping

**To the AI reading this document:**
The user is continuing to build out a centralized Astro **Component Library / Sandbox**. 
Your objective is to ingest the following three "Hero" (Landing Page) components and add them to the Component Library ecosystem. These are incredibly polished, mathematically responsive Landing Page headers. 

Please implement these as standalone Astro components (e.g. `src/components/HeroMono.astro`, `src/components/HeroBlueprint.astro`, and `src/components/HeroFluid.astro`) and map them strictly into your front-end viewing tabs alongside the previous Carousel and Accordion assets.

*Note: You do not need to wrap these in entire HTML `<body>` tags because they are designed to be imported directly into a broader Page Layout as components!*

---

### Component 1: `HeroMono` (The Monolith)
**Dependencies:** Tailwind CSS
**Vibe:** Stark, brutalist, high-contrast monochrome layout with massive typography and sleek hover tracking.

```astro
---
// HeroMono.astro
---

<div class="flex flex-col items-center justify-center min-h-[85vh] text-center w-full px-4 bg-zinc-950 font-sans">
    
    <h1 class="text-6xl md:text-[10rem] font-black tracking-tighter text-white mb-8 leading-[0.85]">
        BUILD<br/><span class="text-zinc-700">BREAK</span><br/>REPEAT
    </h1>
    
    <p class="text-lg md:text-2xl text-zinc-400 max-w-2xl font-mono uppercase tracking-widest mb-16">
        Koby L. // Hardware & Software Engineer
    </p>
    
    <a href="#" class="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-full font-bold tracking-widest uppercase bg-white text-black hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
        <span class="mr-4">Enter The Timeline</span>
        <span class="group-hover:translate-x-2 transition-transform">&rarr;</span>
    </a>
    
</div>
```

---

### Component 2: `HeroBlueprint` (The Blueprint)
**Dependencies:** Tailwind CSS
**Vibe:** Cyber/Tactical. Features complex inline grid backgrounds, radar pulse pings, and mechanical terminal logs.

```astro
---
// HeroBlueprint.astro
---

<div class="flex flex-col items-center justify-center min-h-[85vh] w-full relative bg-zinc-950 font-sans bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] overflow-hidden">
    
    <!-- Radar Overlay -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_80%)] z-0 pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-16 py-16">
        
        <div class="flex-1 space-y-8">
            <div class="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 font-mono text-xs text-blue-400 tracking-widest uppercase">
                <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>System Initialization</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                Architecting <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital & Physical</span> Ecosystems.
            </h1>
            
            <div class="font-mono text-zinc-500 text-sm space-y-2 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 shadow-xl">
                <p class="text-white">> INIT: Koby_L_Portfolio.exe</p>
                <p class="text-emerald-500">> LOADING: Hardware Schematics... OK</p>
                <p class="text-emerald-500">> LOADING: Software Repositories... OK</p>
                <p class="text-blue-400 animate-pulse">> AWAITING USER INPUT...</p>
            </div>
        </div>

        <div class="flex-shrink-0 relative flex items-center justify-center group cursor-pointer h-64 w-64 md:h-auto md:w-auto">
            <div class="absolute inset-0 rounded-full border border-blue-500/20 scale-150 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div class="absolute inset-0 rounded-full border border-blue-500/40 scale-[1.2] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            
            <a href="#" class="w-56 h-56 rounded-full bg-zinc-950 border border-blue-500/50 flex flex-col items-center justify-center relative z-10 shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:bg-blue-950/20 group-hover:border-blue-400 transition-all duration-500">
                <span class="text-blue-400 group-hover:text-blue-300 font-mono text-xs tracking-[0.3em] uppercase mb-3 transition-colors">Access</span>
                <span class="text-white font-black text-2xl tracking-widest uppercase">Timeline</span>
            </a>
        </div>
        
    </div>
</div>
```

---

### Component 3: `HeroFluid` (Ambient Flow)
**Dependencies:** Tailwind CSS
**Vibe:** Apple-esque, hyper-smooth organic blurs and glass blocks. Ethereal aesthetic.

```astro
---
// HeroFluid.astro
---

<div class="flex flex-col items-center justify-center min-h-[85vh] w-full relative bg-zinc-950 font-sans overflow-hidden">
    
    <!-- Background Ambient Fluid Orbs -->
    <div class="absolute top-1/2 left-1/4 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-emerald-500/20 blur-[120px] md:blur-[140px] -translate-y-1/2 animate-[spin_10s_linear_infinite] z-0"></div>
    <div class="absolute top-1/2 right-1/4 w-[55vw] md:w-[35vw] h-[55vw] md:h-[35vw] rounded-full bg-blue-500/20 blur-[100px] md:blur-[120px] -translate-y-1/3 animate-[spin_12s_linear_infinite_reverse] z-0"></div>

    <div class="relative z-10 max-w-3xl text-center px-4 py-20">
        
        <div class="mb-8">
            <span class="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-mono text-xs tracking-widest uppercase shadow-lg">
                Hardware + Software
            </span>
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl mix-blend-overlay">
            Koby L.
        </h1>
        
        <p class="text-xl md:text-3xl text-zinc-300 font-light mb-16 drop-shadow-lg leading-relaxed mix-blend-overlay">
            Bridging the gap between tactile engineering and elegant digital experiences.
        </p>

        <a href="#" class="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all shadow-2xl group cursor-pointer hover:scale-105 active:scale-95">
            <span class="text-white font-medium text-lg tracking-wide mr-4">Explore the Journey</span>
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 group-hover:bg-white/30 transition-all">
                <span class="text-white text-lg">&rarr;</span>
            </div>
        </a>
        
    </div>

</div>
```

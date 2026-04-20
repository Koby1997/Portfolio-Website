# System Context for Component Library Bootstrapping

**To the AI reading this document:**
The user is initializing a brand new Astro repository to serve as a **Component Library / Sandbox**. 
Your primary objective is to build a sleek frontend UI (e.g., a dashboard, a sidebar, or top-nav tabs) that allows the user to cleanly navigate through various reusable UI components. 

Below are the exact source codes for two highly-polished components extracted from a legacy project. 
Please implement these as standalone Astro components (e.g. `src/components/AccordionGallery.astro` and `src/components/PerspectiveCarousel.astro`) and integrate them into the new front-end viewer.

---

### Component 1: Accordion Gallery (Pure HTML/Tailwind)
**Dependencies:** Tailwind CSS

```astro
---
const categories = [
    {
        title: 'Nolan & Cinema',
        tag: '01 / CINEMA',
        bg: 'from-blue-950 via-zinc-900 to-zinc-950',
        items: ['Tenet', 'Inception', 'Interstellar', 'Knives Out', 'Marvel Cinematic Universe', 'Spider-Man']
    },
    {
        title: 'Tactical Kinetics',
        tag: '02 / SPORTS',
        bg: 'from-orange-950 via-zinc-900 to-zinc-950',
        items: ['Volleyball (Beach & Indoor)', 'Lacrosse', 'Dodgeball', 'Paintball', 'Rock Climbing']
    },
    {
        title: 'Digital Narratives',
        tag: '03 / GAMING',
        bg: 'from-emerald-950 via-zinc-900 to-zinc-950',
        items: ['Spider-Man (PS4)', 'Assassin\'s Creed Odyssey', 'God of War', 'The Last of Us', 'Ghost of Yōtei']
    },
    {
        title: 'Tabletop Strategy',
        tag: '04 / ANALOG',
        bg: 'from-purple-950 via-zinc-900 to-zinc-950',
        items: ['Magic the Gathering', 'Poker', 'Jigsaw Puzzles', 'Board Games', 'Escape Rooms']
    },
    {
        title: 'Macro Exploration',
        tag: '05 / MISC',
        bg: 'from-cyan-950 via-zinc-900 to-zinc-950',
        items: ['Space Obsession', 'Traveling the World', 'Music Discovery', 'Star Wars']
    }
];
---

<div class="flex w-full h-full group/accordion font-sans text-white bg-zinc-950">
    {categories.map((cat, i) => (
        <div class={`relative h-full flex-1 hover:flex-[4] sm:hover:flex-[6] overflow-hidden border-r border-zinc-900/50 transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group/panel cursor-pointer bg-gradient-to-t ${cat.bg}`}>
            
            <div class="absolute top-8 right-8 writing-vertical-rl font-mono text-zinc-500/30 text-8xl font-black group-hover/panel:text-white/10 transition-colors duration-700" style="writing-mode: vertical-rl;">
                0{i+1}
            </div>

            <div class="absolute bottom-0 w-[80vw] sm:w-[60vw] md:w-[40vw] p-8 md:p-16 flex flex-col justify-end opacity-0 transform translate-y-[20%] group-hover/panel:opacity-100 group-hover/panel:translate-y-0 transition-all duration-700 delay-100 ease-out pointer-events-none group-hover/panel:pointer-events-auto">
                <span class="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">{cat.tag}</span>
                <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 pb-8 border-b border-white/10 w-fit pr-12 min-w-max whitespace-nowrap drop-shadow-2xl">{cat.title}</h2>
                <div class="flex flex-col flex-wrap h-[30vh] gap-x-12 gap-y-4">
                    {cat.items.map(item => (
                        <div class="flex items-center text-zinc-300 font-medium text-lg min-w-max whitespace-nowrap">
                            <span class="w-2 h-2 bg-white rounded-full mr-4 opacity-50"></span>{item}
                        </div>
                    ))}
                </div>
            </div>
            
            <div class="absolute bottom-16 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap font-mono tracking-[0.3em] uppercase text-zinc-400 group-hover/panel:opacity-0 transition-opacity duration-300 pointer-events-none">
                {cat.title}
            </div>
        </div>
    ))}
</div>
<style>
    @media (max-width: 640px) {
        .group\/accordion { flex-direction: column; }
        .group\/panel { border-r: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .group\/panel:hover { flex: auto; }
        .group\/panel > div:first-child { writing-mode: horizontal-tb; top: auto; bottom: 1rem; right: 1rem; font-size: 4rem; }
        .group\/panel > div:nth-child(2) { transform: none; left: 2rem; bottom: auto; top: 2rem; }
    }
</style>
```

---

### Component 2: 3D Perspective Carousel (Vanilla HTML/JS/Tailwind)
**Dependencies:** Tailwind CSS

```astro
---
const items = [
    { title: 'The Last of Us', cat: 'GAMING ARCHIVE', img: 'from-zinc-800 to-green-950' },
    { title: 'Interstellar', cat: 'NOLAN CINEMA', img: 'from-zinc-800 to-blue-950' },
    { title: 'Spider-Man', cat: 'GAMING ARCHIVE', img: 'from-zinc-800 to-red-950' },
    { title: 'Magic: The Gathering', cat: 'TABLETOP TACTICS', img: 'from-zinc-800 to-purple-950' },
    { title: 'Rock Climbing', cat: 'KINETIC PURSUITS', img: 'from-zinc-800 to-orange-950' },
    { title: 'Tenet', cat: 'NOLAN CINEMA', img: 'from-zinc-800 to-cyan-950' },
    { title: 'Ghost of Yōtei', cat: 'GAMING ARCHIVE', img: 'from-zinc-800 to-rose-950' },
    { title: 'Volleyball', cat: 'KINETIC PURSUITS', img: 'from-zinc-800 to-emerald-950' }
];
---

<div class="flex-grow w-full h-full relative flex items-center justify-center overflow-hidden bg-zinc-950 text-white font-sans" style="perspective: 1200px;">
    
    <div class="w-full text-center absolute top-12 z-10 pointer-events-none">
        <h1 class="text-4xl font-light tracking-[0.3em] uppercase text-zinc-300">Media Gallery</h1>
        <p class="text-zinc-500 font-mono text-xs tracking-widest mt-4">USE ARROW KEYS OR SWIPE TO ROTATE</p>
    </div>

    <div id="carousel" class="absolute w-[300px] h-[400px]" style="transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); transform: rotateY(0deg);">
        {items.map((item, i) => {
            const angle = (i * 360) / items.length;
            return (
                <div class={`absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br ${item.img} border border-zinc-700 shadow-2xl flex flex-col justify-end p-6 cursor-pointer hover:border-white transition-colors group`}
                     style={`transform-style: preserve-3d; transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); -webkit-box-reflect: below 2px linear-gradient(transparent, transparent, rgba(0,0,0,0.4)); transform: rotateY(${angle}deg) translateZ(450px);`}>
                     
                     <div class="absolute inset-0 rounded-2xl bg-black/20 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
                     <div class="relative z-10">
                        <span class="font-mono text-xs tracking-[0.2em] text-white/50 uppercase block mb-2 drop-shadow-md">{item.cat}</span>
                        <h2 class="text-2xl font-black text-white tracking-tighter drop-shadow-xl">{item.title}</h2>
                     </div>
                </div>
            )
        })}
    </div>
</div>

<script define:vars={{ count: items.length }}>
    const carousel = document.getElementById('carousel');
    let currentIndex = 0;
    const theta = 360 / count;

    function rotateCarousel() {
        const angle = currentIndex * -theta;
        carousel.style.transform = `rotateY(${angle}deg)`;
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { currentIndex++; rotateCarousel(); }
        else if (e.key === 'ArrowLeft') { currentIndex--; rotateCarousel(); }
    });

    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) currentIndex++; else currentIndex--;
        rotateCarousel();
    }, { passive: true });

    let startX = 0;
    window.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    window.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) { currentIndex++; rotateCarousel(); }
        else if (endX - startX > 50) { currentIndex--; rotateCarousel(); }
    });
</script>
```

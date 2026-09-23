// Color tokens per timeline category. Class names are written out in full so Tailwind can find them.
export interface CategoryColors {
    text: string;        // Category label text (timeline cards)
    bg: string;          // Solid dot / node fill
    borderHover: string; // Card hover border
    shadow: string;      // Node glow
    badgeText: string;   // Project page hero badge text
    badgeBg: string;     // Project page hero badge background
}

const CATEGORY_COLORS: Record<string, CategoryColors> = {
    software:    { text: 'text-emerald-500', bg: 'bg-emerald-500', borderHover: 'hover:border-emerald-500', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.5)]', badgeText: 'text-emerald-500', badgeBg: 'bg-emerald-500/10' },
    hardware:    { text: 'text-blue-500',    bg: 'bg-blue-500',    borderHover: 'hover:border-blue-500',    shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',  badgeText: 'text-blue-500',    badgeBg: 'bg-blue-500/10' },
    event:       { text: 'text-orange-500',  bg: 'bg-orange-500',  borderHover: 'hover:border-orange-500',  shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.5)]',  badgeText: 'text-orange-500',  badgeBg: 'bg-orange-500/10' },
    engineering: { text: 'text-cyan-500',    bg: 'bg-cyan-500',    borderHover: 'hover:border-cyan-500',    shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.5)]',   badgeText: 'text-cyan-500',    badgeBg: 'bg-cyan-500/10' },
    milestone:   { text: 'text-purple-500',  bg: 'bg-purple-500',  borderHover: 'hover:border-purple-500',  shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.5)]',  badgeText: 'text-purple-500',  badgeBg: 'bg-purple-500/10' },
};

const DEFAULT_COLORS: CategoryColors = {
    text: 'text-zinc-500', bg: 'bg-zinc-500', borderHover: 'hover:border-zinc-500', shadow: 'shadow-[0_0_15px_rgba(113,113,122,0.5)]', badgeText: 'text-zinc-400', badgeBg: 'bg-zinc-800/10',
};

export const getColorConfig = (category: string): CategoryColors =>
    CATEGORY_COLORS[category.toLowerCase()] ?? DEFAULT_COLORS;

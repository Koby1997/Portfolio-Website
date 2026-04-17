// Three-Tier structured JSON: Hub -> Category -> Item
// Used strictly to physically map nodes into the WebGL Brain engine
export const hubs = [
    { 
        id: 'h1', name: 'KINETICS', color: 0xea580c, cssColor: '#ea580c', x: 80, y: 150, z: 0, 
        categories: [
            { name: 'Sports', items: ['Volleyball', 'Lacrosse', 'Dodgeball'] },
            { name: 'Action', items: ['Rock Climbing', 'Paintball'] }
        ] 
    },
    { 
        id: 'h2', name: 'TACTICS', color: 0xa855f7, cssColor: '#a855f7', x: -150, y: -80, z: 20, 
        categories: [
            { name: 'Tabletop', items: ['Magic the Gathering', 'Board Games'] },
            { name: 'Logic', items: ['Poker', 'Escape Rooms'] }
        ] 
    },
    { 
        id: 'h3', name: 'CINEMA', color: 0x3b82f6, cssColor: '#3b82f6', x: 0, y: -10, z: -200, 
        categories: [
            { name: 'Movies', items: ['Tenet', 'Inception', 'Interstellar'] },
            { name: 'Franchises', items: ['Star Wars', 'Marvel'] }
        ] 
    },
    { 
        id: 'h4', name: 'DIGITAL', color: 0x10b981, cssColor: '#10b981', x: 0, y: 80, z: 180, 
        categories: [
            { name: 'Gaming', items: ['Spider-Man', 'Ghost of Yōtei', 'God of War'] }
        ] 
    }
];

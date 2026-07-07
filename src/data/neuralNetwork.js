// neuralNetwork.js
// Single Source of Truth for the Artificial Brain's UI and data clustering.

export const hubs = [
    {
        id: '1',
        name: 'ACTIVE',
        x: 180, y: 150, z: -100,
        color: 0x3b82f6,
        cssColor: 'rgba(59, 130, 246, 0.8)',
        categories: [
            {
                name: 'Sports',
                secondaryParents: ['PLAY / STRATEGY', 'Competitive'],
                items: [
                    'Lacrosse', 'Indoor Volleyball', 'Sand Volleyball',
                    'Dodgeball', { name: 'Rock Climbing', secondaryParents: ['Mindset', 'Self Challenging', 'Favorites'] }, 'Paintball', 'Ultimate Frisbee'
                ]
            },
            {
                name: 'Racing',
                secondaryParents: ['PLAY / STRATEGY', 'Competitive'],
                items: [
                    'Kart Racing', 'F1', { name: 'Driving Simulators', secondaryParents: ['Video Games'] }
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'PLAY / STRATEGY',
        x: 10, y: 100, z: 150,
        color: 0x10b981,
        cssColor: 'rgba(16, 185, 129, 0.8)',
        categories: [
            {
                name: 'Board Games',
                secondaryParents: ['Competitive'],
                items: [
                    { name: 'Poker', secondaryParents: ['Self Challenging'] },
                    { name: 'Chess', note: 'Always up for a game!', secondaryParents: ['Thought Provoking', 'Self Challenging'] },
                    { name: 'Magic the Gathering', note: 'Pre-release is the best' }
                ]
            },
            {
                name: 'Puzzles',
                items: [
                    { name: 'Escape Rooms', secondaryParents: ['Thought Provoking'] },
                    { name: 'Logic Puzzles', secondaryParents: ['Thought Provoking'] },
                    'Wooden/Metal Puzzles'
                ]
            },
            {
                name: 'Video Games',
                items: [
                    { name: 'Spider-Man', note: '100% The best Super Hero', secondaryParents: ['Marvel', 'Favorites'] },
                    'Ghost of Yōtei', 'God of War', 'The Last of Us',
                    { name: 'Keep Talking and Nobody Explodes', secondaryParents: ['Puzzles'] },
                    { name: 'It Takes Two', secondaryParents: ['Puzzles'] },
                    "Assassin's Creed Odyssey"
                ]
            }
        ]
    },
    {
        id: '3',
        name: 'Stories',
        x: -110, y: 90, z: -180,
        color: 0x8b5cf6,
        cssColor: 'rgba(139, 92, 246, 0.8)',
        categories: [
            {
                name: 'Movies',
                items: [
                    { name: 'Tenet', note: 'Easily my favorite movie', secondaryParents: ['Thought Provoking', 'Problem Solver', 'Favorites'] },
                    { name: 'Inception', secondaryParents: ['Thought Provoking', 'Problem Solver'] },
                    { name: 'Interstellar', secondaryParents: ['Space Exploration'] },
                    { name: 'The Prestige', secondaryParents: ['Thought Provoking'] },
                    'Book of Eli', 'Gladiator',
                    { name: 'Shutter Island', secondaryParents: ['Thought Provoking'] },
                    { name: 'Deja Vu', secondaryParents: ['Thought Provoking'] }
                ]
            },
            {
                name: 'Shows',
                items: [
                    'Avatar: The Last Airbender', 'Breaking Bad',
                    { name: 'Andor', secondaryParents: ['Star Wars'] },
                    { name: 'Clone Wars', secondaryParents: ['Star Wars'] },
                    'The Office',
                    { name: 'Death Note', secondaryParents: ['Thought Provoking'] },
                    'Hunter X Hunter',
                    { name: 'Survivor', secondaryParents: ['PLAY / STRATEGY', 'Competitive'] }
                ]
            },
            {
                name: 'Books',
                items: [
                    'The Stormlight Archive', 'Red Rising',
                    { name: 'Project Hail Mary', note: "Listen to the audio book!", secondaryParents: ['Thought Provoking'] }
                ]
            },
            {
                name: 'Story Worlds',
                items: [
                    { name: 'Star Wars', secondaryParents: ['Movies', 'Shows', 'Favorites'] },
                    { name: 'Marvel', secondaryParents: ['Movies'] },
                    { name: 'Lord of the Rings', secondaryParents: ['Movies'] },
                    { name: 'Greek Mythology', note: "Thanks Percy Jackson" }
                ]
            }
        ]
    },
    {
        id: '4',
        name: 'ENGINEERING',
        x: 160, y: -40, z: 150,
        color: 0xef4444,
        cssColor: 'rgba(239, 68, 68, 0.8)',
        categories: [
            {
                name: 'Software',
                secondaryParents: ['Problem Solver', 'Self Challenging'],
                items: [
                    'Python', 'React',
                    { name: 'Stock Analysis', secondaryParents: ['PLAY / STRATEGY'] }
                ]
            },
            {
                name: 'Aerospace',
                items: [
                    { name: 'Space Exploration', secondaryParents: ['Thought Provoking'] },
                    'Rockets'
                ]
            },
            {
                name: 'Making',
                secondaryParents: ['Builder'],
                items: [
                    '3D Printing',
                    { name: 'Arduino', secondaryParents: ['Software'] }
                ]
            }
        ]
    },
    {
        id: '5',
        name: 'CHARACTER',
        x: -160, y: -20, z: 120,
        color: 0xf59e0b,
        cssColor: 'rgba(245, 158, 11, 0.8)',
        categories: [
            {
                name: 'Mindset',
                items: [
                    'Determined', 'Optimistic',
                    { name: 'Curious', secondaryParents: ['Space Exploration', 'Software'] },
                    'Resilient', { name: 'Growth-Oriented', secondaryParents: ['Self Challenging'] }, { name: 'Competitive', secondaryParents: ['Self Challenging'] }
                ]
            },
            {
                name: 'Work Style',
                secondaryParents: ['ENGINEERING'],
                items: [
                    { name: 'Problem Solver', secondaryParents: ['Puzzles', 'Software', 'Board Games'] },
                    { name: 'Planner', secondaryParents: ['PLAY / STRATEGY'] },
                    { name: 'Builder', secondaryParents: ['Making'] }
                ]
            },
            {
                name: 'Values',
                items: [
                    { name: 'Faith', secondaryParents: ['Thought Provoking'] },
                    'Family', 'Integrity',
                    { name: 'Learning', secondaryParents: ['Mindset'] }
                ]
            }
        ]
    },
    {
        id: '6',
        name: 'Thought Provoking',
        isFloating: true,
        x: 45, y: 70, z: -120,
        color: 0xec4899,
        cssColor: 'rgba(236, 72, 153, 0.8)',
        categories: []
    },
    {
        id: '7',
        name: 'Self Challenging',
        isFloating: true,
        x: -100, y: 40, z: -60,
        color: 0xfa1b0b,
        cssColor: 'rgba(250, 27, 11, 0.88)',
        categories: []
    },
    {
        id: '8',
        name: 'Favorites',
        isFloating: true,
        x: 5, y: 220, z: -50,
        color: 0xf8fafc,
        cssColor: 'rgba(250, 250, 250, 1)',
        categories: [
            {
                name: 'Core Favorites',
                invisibleCategory: true,
                items: [
                    'Cuttlefish',
                    { name: "If I Ain't Got You", note: "This song is a banger" }
                ]
            }
        ]
    }
];

if (typeof window !== 'undefined') {
    window.USER_HUBS = hubs;
}

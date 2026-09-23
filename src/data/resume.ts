// Resume content rendered on the far-left "My Career" screen of the home page (src/pages/index.astro).
// Update this file to update the resume; the markup never needs to change.

export interface Bullet {
    label?: string; // Bold lead-in, e.g. "Manticore:"
    text: string;
}

export interface Job {
    company: string;
    title: string;
    dates: string;
    bullets: Bullet[];
}

export interface ResumeProject {
    name: string;
    timelineHref: string; // Project page, opened with ?ref=resume so the back button says "Back to Resume"
    githubHref?: string;
    bullets: string[];
}

export const resume = {
    name: 'Koby Miller',
    role: 'Software Engineer',
    location: 'Viera, FL',
    email: 'KobyLMiller@outlook.com',
    phone: '321-313-4355',
    clearance: 'TS/SCI Cleared',
    pdf: '/assets/KobyMillerResume.pdf',

    education: {
        school: 'University of Florida',
        degree: 'B.S. Computer Engineering',
        graduated: 'Graduated 12/2020',
    },

    certifications: [
        { name: 'CompTIA Security+', detail: 'Exp. 05/2029' },
        { name: 'SAFe Practitioner', detail: 'Active Certification' },
    ],

    skills: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Java', 'Python', 'C++', 'FastAPI', 'Pandas', 'MongoDB', 'SQL', 'Astro', 'Tailwind CSS', 'Three.js', 'Linux', 'Git', 'Atlassian'],

    experience: [
        {
            company: 'Dark Wolf',
            title: 'Senior Associate Software Engineer',
            dates: '07/2023 — Present',
            bullets: [
                { label: 'Manticore:', text: 'Developed full-stack features for mission-critical tools within the Manticore system, including enhancements to Master Station Log and Cyber Mission Mapping.' },
                { label: 'MSL SME:', text: 'Acted as the primary technical representative for the team, interfacing directly with customers, end users, and cross-functional teams; led demos and communicated system capabilities to operators.' },
                { label: 'Ownership & Delivery:', text: 'Designed and delivered multiple large-scale features from concept through deployment, leading development efforts and coordinating a small team to implement operator-driven requirements.' },
            ],
        },
        {
            company: 'L3Harris',
            title: 'Software Engineer I',
            dates: '05/2021 — 07/2023',
            bullets: [
                { label: 'ISW / ATSS:', text: 'Diagnosed and resolved issues in a complex counter-communication system, working directly with hardware (spectrum analyzers, decoders, attenuators) and improving system reliability. Modified installation scripts and altered code to pass Coverity scans.' },
                { label: 'Training Records:', text: "Created an internal tool made from scratch to aid Technical Trainers in keeping track of all employees' training process." },
                { label: 'GBOSS & TRAX:', text: 'Supported integration of Syntrack (JPL software) into deep space telescope systems, and collaborated on a company-wide survey platform.' },
                { label: 'PEER Coordinator:', text: 'Led program that helps new hires, minimizing transition downtime.' },
            ],
        },
        {
            company: 'SS&C Advent',
            title: 'Product Development Intern',
            dates: '05/2019 — 08/2019',
            bullets: [
                { text: 'Created internal tools to monitor client data ingestion processes, increasing visibility into system performance.' },
                { text: 'Automated anomaly detection by connecting SQL queries to Slack notifications, enabling real-time issue awareness.' },
            ],
        },
    ] satisfies Job[],

    projects: [
        {
            name: 'StockViz',
            timelineHref: '/projects/stock-project-v2?ref=resume',
            bullets: [
                'Architected a full-stack algorithmic analysis platform to back a self-theorized trading strategy.',
                'Engineered a Python/FastAPI backend leveraging Pandas and custom knapsack optimization algorithms to generate efficient, non-overlapping trade schedules.',
                'Built an interactive React dashboard with dynamic visualizations for projected equity curves, portfolio distributions, and predictive confidence metrics.',
            ],
        },
        {
            name: 'Cuttlefish Lights',
            timelineHref: '/projects/cuttlefish-v3?ref=resume',
            githubHref: 'https://github.com/Koby1997/CuttlefishLights',
            bullets: [
                'Engineered an Arduino-based system that synchronizes LED lighting effects with live audio input.',
                'Programmed dynamic visual effects using the FastLED library to respond to distinct musical cues.',
                'Built a desktop application to provide an intuitive interface for controlling lighting behaviors.',
            ],
        },
    ] satisfies ResumeProject[],
};

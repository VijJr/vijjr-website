/*
 * Single source of truth for everything on the site.
 * Pages and components only render what is declared here, so updating the
 * portfolio means editing this file and nothing else.
 */

export type Discipline = 'software' | 'games' | 'robotics';
export type Shape = 'circle' | 'square' | 'triangle';

export interface Stat { value: string; label: string; }
export interface Link { label: string; url: string; }

export interface Media {
  kind: 'youtube' | 'vimeo';
  id: string;
  hash?: string;          // Vimeo unlisted-video hash
  title: string;
  thumb: string;
}

export interface Work {
  id: string;
  primary: Discipline;
  also?: Discipline[];    // disciplines this entry is cross-linked into
  cv?: boolean;           // computer-vision work: lives in Robotics, linked from Software + Games
  type: 'experience' | 'project';
  kind: string;
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  status?: string;
  summary: string;
  context?: string;
  highlights: string[];
  highlightsLabel?: string;
  stack: string[];
  stats?: Stat[];
  links?: Link[];
  media?: Media[];
  sections?: { title: string; items: string[] }[];
  credit?: { name: string; label: string };  // byline shown as a heading on the detail page
  showTitles?: boolean;  // render the shipped-titles table on the detail page
  featured?: boolean;
}

export interface DisciplineInfo {
  id: Discipline;
  index: string;
  code: string;
  name: string;
  short: string;
  shape: Shape;
  phrase: string;
  lede: string;
  statement: string;
  stats: Stat[];
  toolkit: { group: string; items: string[] }[];
  cvNote?: string;
}

export interface Course { code?: string; name: string; grade: string; disciplines: Discipline[]; }
export interface Honor { date: string; name: string; }
export interface Recognition { name: string; detail: string; year?: string; image?: string; }
export interface Activity { role: string; org: string; period: string; detail: string; workId?: string; discipline?: Discipline; }
export interface ShippedTitle { name: string; studio: string; genre?: string; visits?: string; status: string; url: string; }

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: 'Vijay Ravi',
  school: 'University of Michigan',
  campus: 'Ann Arbor, MI',
  degree: 'B.S.E. Computer Science & Robotics',
  gpa: '3.81',
  graduation: 'Expected May 2027',
  email: 'vijjr@umich.edu',
  github: 'https://github.com/VijJr',
  linkedin: 'https://www.linkedin.com/in/vijjr',
  itch: 'https://vijjr.itch.io',
  youtube: 'https://www.youtube.com/channel/UCB9liPZa5oAvcG1cUfEQ-8A',
  resume: 'assets/VIJAY_RAVI_RESUME.pdf',
  bio: [
    'I study Computer Science and Robotics at the University of Michigan. I’ve shipped platform features at Siemens over two internships, built multiplayer systems for Roblox titles with 10M+ visits, and lead a computer-vision research team.',
    'The three feed each other: the networking that keeps multiplayer servers honest shaped how I build microservices, and the math that aims a turret is the same math that finds a pedestrian in a camera frame.',
  ],
  interests: ['Rock climbing', 'Basketball', 'Carnatic violin', 'Guitar', 'Trumpet', 'Cross country', 'Weightlifting', 'Volleyball'],
};

export const HOME_STATS: Stat[] = [
  { value: '2×', label: 'SWE internships at Siemens' },
  { value: '10M+', label: 'Player visits on games I engineered for' },
  { value: '3', label: 'Computer-vision research labs' },
  { value: '3.81', label: 'GPA, James B. Angell Scholar' },
];

/* ------------------------------------------------------------------ */
/* Disciplines                                                        */
/* ------------------------------------------------------------------ */

export const DISCIPLINES: DisciplineInfo[] = [
  {
    id: 'software',
    index: '01',
    code: 'SW',
    name: 'Software Engineering',
    short: 'Software',
    shape: 'circle',
    phrase: 'software that ships',
    lede: 'Production full-stack at enterprise.',
    statement:
      'Two internships at Siemens shipping framework features that every Teamcenter application inherits, and a nonprofit platform I architected from an empty repo before the AI era.',
    stats: [
      { value: '2×', label: 'Siemens SWE internships' },
      { value: '−75%', label: 'Initial page-load API calls' },
      { value: '4', label: 'App teams on my LLM orchestrator' },
      { value: '200+', label: 'Users on the Helivox platform' },
    ],
    toolkit: [
      { group: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'C++', 'C', 'C#', 'Python', 'SQL', 'Lua', 'Shell'] },
      { group: 'Frameworks', items: ['React', 'Angular', 'Node.js', 'Spring Boot'] },
      { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'GCP', 'Firebase', 'Jenkins', 'Git'] },
      { group: 'Data', items: ['MySQL', 'OracleDB', 'pandas', 'scikit-learn'] },
      { group: 'Practice', items: ['Microservices', 'REST', 'CI/CD', 'Test automation', 'Agile', 'Object-oriented design'] },
    ],
    cvNote: 'the software half of perception, from model pipelines to edge deployment.',
  },
  {
    id: 'games',
    index: '02',
    code: 'GD',
    name: 'Game Development',
    short: 'Games',
    shape: 'square',
    phrase: 'games people play',
    lede: 'Multiplayer games that scale for real players.',
    statement:
      'Multiplayer games that scale for real players. Networking, persistence and security for Roblox titles with 10M+ combined visits, combat systems, and Unity work in C#.',
    stats: [
      { value: '10M+', label: 'Player visits' },
      { value: '~1,000', label: 'Peak concurrent players' },
      { value: '10+', label: 'Games architected' },
      { value: '2', label: 'Engines: Roblox and Unity' },
    ],
    toolkit: [
      { group: 'Languages', items: ['Luau', 'C#', 'TypeScript'] },
      { group: 'Engines', items: ['Roblox Studio', 'Unity'] },
      { group: 'Systems', items: ['Client-server networking', 'Buffer serialization', 'Data persistence', 'State machines', 'Rate limiting', 'Matchmaking'] },
      { group: 'Gameplay', items: ['Combat & skills', 'Aim assist', 'NPC pathfinding', 'Animation timing', 'VFX', 'React UI'] },
    ],
    cvNote: 'the same cameras, projections and frame budgets behind rendering and aim assist.',
  },
  {
    id: 'robotics',
    index: '03',
    code: 'RB',
    name: 'Robotics',
    short: 'Robotics',
    shape: 'triangle',
    phrase: 'robots that see',
    lede: 'Perception research and hardware.',
    statement:
      'Computer-vision research across three labs, autonomous payload drops at M-Fly, and hardware I have been building since high school.',
    stats: [
      { value: '3', label: 'Research labs' },
      { value: '100+', label: 'Glioblastoma slides modeled' },
      { value: '10,000+', label: 'Camera-failure samples evaluated' },
      { value: '100+ ft', label: 'Onboard detection altitude' },
    ],
    toolkit: [
      { group: 'Perception', items: ['PyTorch', 'OpenCV', 'NumPy', 'YOLO', 'ResNet', 'U-Net', 'Slideflow'] },
      { group: 'Systems', items: ['Robot operating systems', 'Feedback control', 'Edge inference', 'Serial & radio links'] },
      { group: 'Hardware', items: ['Arduino', 'ATtiny85', 'Servos', 'IMU', 'HC-12 radio', 'SIM800L GSM', 'PCB soldering'] },
      { group: 'Design', items: ['CAD', 'Part design', 'Hardware modeling', 'Thermal modeling'] },
      { group: 'Languages', items: ['Python', 'C++', 'C', 'Java'] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Work                                                               */
/* ------------------------------------------------------------------ */

const vimeoThumb = (slug: string) => `https://i.vimeocdn.com/video/${slug}-d_1280x720`;
const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const WIX = 'https://vijjr04.wixsite.com/deeper-understanding/post';

export const WORK: Work[] = [
  /* ---------------- Software ---------------- */
  {
    id: 'siemens-2026',
    primary: 'software',
    type: 'experience',
    kind: 'Internship',
    title: 'Siemens',
    subtitle: 'Software Engineering Intern',
    location: 'Troy, MI',
    period: 'May – Aug 2026',
    summary: 'Piloted an LLM orchestrator for microservice agents and rebuilt global navigation for the Teamcenter platform.',
    highlights: [
      'Piloted an LLM orchestrator that registers microservice agents as callable tools and routes user queries to them at runtime; adopted by four app teams during the pilot with no per-team changes.',
      'Rebuilt global navigation across server, client, and framework layers so group, role, and workspace switches commit in a single save, cutting a worst case of five render cycles down to one.',
      'Consolidated three separate HTML-injection Markdown renderers into one shared React component, shipped to four applications including Siemens Agentic Chat with copyable code blocks and LaTeX rendering.',
      'Prototyped a dashboard customization builder with persistence at user, group, role, and workspace scope.',
      'Wrote and shipped server-side POM queries that gather and filter Teamcenter business objects, with lookup caching.',
    ],
    stack: ['React', 'TypeScript', 'C++', 'C', 'MySQL', 'Microservices', 'LLM tooling', 'Agile'],
    stats: [
      { value: '4', label: 'App teams adopted the orchestrator' },
      { value: '5 → 1', label: 'Render cycles per context switch' },
      { value: '3 → 1', label: 'Markdown renderers consolidated' },
    ],
    featured: true,
  },
  {
    id: 'siemens-2025',
    primary: 'software',
    type: 'experience',
    kind: 'Internship',
    title: 'Siemens',
    subtitle: 'Software Engineering Intern',
    location: 'Troy, MI',
    period: 'May – Aug 2025',
    summary: 'Shipped the personalized Teamcenter dashboard as a framework capability used across every application in the product line.',
    highlights: [
      'Shipped the personalized Teamcenter dashboard as a framework capability now used across every application in the product line: a configurable card schema backed by two new server endpoints and an extended personalization data model.',
      'Cut initial page-load API calls by up to 75% by virtualizing off-screen cards behind placeholder templates with configurable render-ahead, deferring card data fetches until scroll, and owned it through the entire software development lifecycle.',
      'Fixed a state-merge defect in the client framework’s personalization data processor that was discarding incoming state.',
      'Partnered with 3 teams and 2 product owners through product demos to consolidate and deliver on technical requirements.',
    ],
    stack: ['React', 'C++', 'C', 'MySQL', 'Jest', 'Jenkins', 'Agile'],
    stats: [
      { value: '−75%', label: 'Initial page-load API calls' },
      { value: '2', label: 'New server endpoints' },
      { value: 'Every', label: 'App in the product line' },
    ],
  },
  {
    id: 'helivox',
    primary: 'software',
    type: 'experience',
    kind: 'Nonprofit',
    title: 'Helivox',
    subtitle: 'Co-founder & Lead Developer',
    location: 'Troy, MI',
    period: 'Jan 2021 – Nov 2023',
    summary: 'Architected the full platform for a student-led 501(c)(3) education nonprofit: Spring Boot microservices on Kubernetes behind an Angular client.',
    context:
      'Helivox is a PVSA-certified, student-led 501(c)(3) that publishes educational resources for students, by students, with six chapters across three states. I built its platform so that non-technical members could publish and manage content like a CMS.',
    highlights: [
      'Architected Spring Boot microservices on Kubernetes for authentication, analytics, and content management.',
      'Built role-based UI generation and pagination producing 100+ configurable components for 200+ users.',
      'Implemented tiered authentication across client and server with role-based authorization for five staff roles, storing credentials and PII on Google Cloud and Firebase.',
      'Trained team members to manage and develop the site with Git source control.',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Firebase', 'Apache Spark', 'Kubernetes', 'GCP', 'Git'],
    stats: [
      { value: '200+', label: 'Users' },
      { value: '100+', label: 'Configurable components' },
      { value: '5', label: 'Staff roles with scoped access' },
    ],
    links: [
      { label: 'Live site', url: 'https://legacy.helivox.com/' },
      { label: 'Admin demo', url: 'https://youtu.be/0SNHHDkTCNE' },
    ],
    media: [{ kind: 'youtube', id: '0SNHHDkTCNE', title: 'Helivox admin demo', thumb: ytThumb('0SNHHDkTCNE') }],
  },
  {
    id: 'recipe-ml',
    primary: 'software',
    type: 'project',
    kind: 'Data science',
    title: 'Recipe nutrition model',
    subtitle: 'EECS 398 · Practical Data Science',
    period: '2025',
    summary: 'End-to-end ML workflow over 83,782 Food.com recipes and 731,927 ratings, predicting a recipe’s protein content from its metadata.',
    highlights: [
      'Merged recipes with 731,927 independently sourced ratings, cleaned impossible zero ratings, and exploded tag strings into analyzable lists.',
      'Imputed missing ratings with per-tag group means, preserving the original distribution.',
      'Built a standardized linear-regression baseline, then a Ridge model with polynomial and log feature transforms, robust scaling and a cross-validated grid search over alpha.',
      'Published the analysis with interactive Plotly visualizations and a written report.',
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'Plotly', 'Jupyter'],
    stats: [
      { value: '83,782', label: 'Recipes' },
      { value: '731,927', label: 'Ratings' },
      { value: 'A+', label: 'Course grade' },
    ],
    links: [{ label: 'Code & report', url: 'https://github.com/VijJr/foods-ML' }],
  },
  {
    id: 'euchre-ai',
    primary: 'software',
    also: ['games'],
    type: 'project',
    kind: 'Class project',
    title: 'Euchre with AI players',
    subtitle: 'EECS 280 · C++',
    period: '2023',
    summary: 'A complete, playable Euchre engine in C++ with rule-based AI opponents that bid and play alongside a human.',
    highlights: [
      'Implemented the full rules of Euchre: making trump across two rounds, left and right bowers, trick-taking and scoring to ten.',
      'Designed a polymorphic Player interface with a factory so human and AI players are interchangeable at runtime.',
      'Wrote the AI’s bidding and card-play strategy around trump strength and led-suit rules, verified with unit tests.',
    ],
    stack: ['C++', 'Object-oriented design', 'Unit testing'],
  },

  /* ---------------- Games ---------------- */
  {
    id: 'roblox-systems',
    primary: 'games',
    also: ['software'],
    type: 'experience',
    kind: 'Game systems',
    title: 'Multiplayer systems on Roblox',
    subtitle: 'Systems & gameplay engineer',
    period: '2022 – Present',
    summary: 'Client-server architecture for 10+ games with 10M+ player visits and peaks near 1,000 concurrent players.',
    highlights: [
      'Architected client-server systems for 10+ games with 10M+ player visits and peaks near 1,000 concurrent players, covering networking, reusable services, React interfaces, and state machines.',
      'Built fault-tolerant purchase persistence over a cached player data layer so transactions survive session and server failures.',
      'Secured server endpoints with authentication, request validation, rate limiting, and caching against malicious clients.',
      'Optimized high-volume messaging with type-safe protocols and buffer-based serialization; tuned memory and frame time.',
    ],
    stack: ['Luau', 'Roblox Studio', 'React', 'Networking', 'Data persistence', 'State machines'],
    showTitles: true,
    stats: [
      { value: '10M+', label: 'Player visits' },
      { value: '~1,000', label: 'Peak concurrent players' },
      { value: '10+', label: 'Games' },
    ],
    featured: true,
  },
  {
    id: 'zelda-nes',
    primary: 'games',
    type: 'project',
    kind: 'Class project',
    title: 'Zelda NES dungeon + custom dash',
    subtitle: 'EECS 494 · Unity / C#',
    period: 'Fall 2026',
    status: 'Playable',
    summary: 'A faithful recreation of the 1984 NES Legend of Zelda dungeon in Unity, extended with an original dash mechanic.',
    credit: { name: 'Vijay Ravi', label: 'Team of two' },
    highlightsLabel: 'My contributions',
    highlights: [
      'A robust, reusable room system with configurable doors in each cardinal direction.',
      'Grid-aligned player movement matching the original’s feel.',
      'Every weapon: sword, sword beam, arrow, boomerang, and bomb.',
      'Consistency with the original game for audio, placement, and gameplay.',
      'A custom dash that passes through obstacles, damages enemies, and adds depth to progression.',
    ],
    stack: ['Unity', 'C#', 'Game design', 'Level systems'],
    links: [{ label: 'Play in browser', url: 'https://vijjr.itch.io/zelda-nes-recreation' }],
  },
  {
    id: 'mining-life',
    primary: 'games',
    type: 'project',
    kind: 'Class project',
    title: 'Mining Life',
    subtitle: 'EECS 494 · Unity / C#',
    period: 'Fall 2026',
    status: 'Playable',
    summary: 'A miner is trying to harvest all the ores, but every time they try to mine, enemies spawn. Survive as long as possible by trading ores for special abilities.',
    credit: { name: 'Vijay Ravi', label: 'Team of one' },
    highlightsLabel: 'My contributions',
    highlights: [
      'Raycasting systems with tracers and mouse-coordinate aiming.',
      'Movement blending and programmatic animation driven by periodic functions.',
      'Special effects, camera effects, visual effects, and particle effects.',
      'A reusable component-based system driven by event-bus communication.',
      'Boids-algorithm enemy clustering for realistic group pathfinding.',
    ],
    stack: ['Unity', 'C#', 'Raycasting', 'Procedural animation', 'Event bus', 'Boids', 'VFX'],
    links: [{ label: 'Play in browser', url: 'https://vijjr.itch.io/mining-life' }],
  },
  {
    id: 'fps-framework',
    primary: 'games',
    type: 'project',
    kind: 'Systems demo',
    title: 'FPS framework',
    subtitle: 'Roblox · Luau',
    period: '2025',
    summary: 'A complete first-person shooter system: multiple weapons, a config-driven weapon pipeline, and enemy NPCs with robust pathfinding.',
    highlights: [
      'Fully functional FPS loop with multiple weapons.',
      'Configurable weapon system: adding a new weapon is a data change, not a code change.',
      'Enemy NPCs with robust pathfinding that navigate and engage the player.',
    ],
    stack: ['Luau', 'Pathfinding', 'Weapon systems', 'NPC AI'],
    links: [{ label: 'Watch', url: 'https://www.youtube.com/watch?v=cDmfcwv6vR4' }],
    media: [{ kind: 'youtube', id: 'cDmfcwv6vR4', title: 'FPS framework demo', thumb: ytThumb('cDmfcwv6vR4') }],
  },
  {
    id: 'auto-turret',
    primary: 'games',
    type: 'project',
    kind: 'Systems demo',
    title: 'Jointed auto-aiming turret',
    subtitle: 'Roblox · Luau',
    period: '2025',
    summary: 'A modular, articulated turret that tracks and leads moving targets, with configurable spread patterns.',
    highlights: [
      'Leads targets by projecting their velocity ahead of the current position before solving the aim direction.',
      'Generates an evenly distributed bullet spread along the barrel’s right vector for any number of projectiles.',
      'Split into a server-side module, a client script and a remote event so behavior stays authoritative on the server.',
    ],
    stack: ['Luau', 'Vector math', 'CFrames', 'Client-server'],
    links: [
      { label: 'Watch', url: 'https://vimeo.com/1068898810/a64c48f04c' },
      { label: 'Source', url: 'https://github.com/VijJr/demo/blob/main/TurretModule.lua' },
    ],
    media: [{
      kind: 'vimeo', id: '1068898810', hash: 'a64c48f04c', title: 'Turret demo',
      thumb: vimeoThumb('1997111341-61a36365b8160179190138aef7af6f4f612c1229c376e72bbe5ddb68d6157b92'),
    }],
  },
  {
    id: 'lightning-skill',
    primary: 'games',
    type: 'project',
    kind: 'Combat',
    title: 'Stun-lock lightning skill',
    subtitle: 'Roblox · Luau',
    period: '2025',
    summary: 'A lightning ability with auto-aim target acquisition, stun-lock and layered VFX.',
    highlights: [
      'Auto-aim that acquires the nearest valid target in the player’s facing cone.',
      'Stun-lock state applied server-side so hits stay consistent across clients.',
      'Timed VFX and hit feedback synchronized to the cast.',
    ],
    stack: ['Luau', 'VFX', 'Combat systems'],
    links: [{ label: 'Watch', url: 'https://vimeo.com/1064299305/6396cc34ce' }],
    media: [{
      kind: 'vimeo', id: '1064299305', hash: '6396cc34ce', title: 'Lightning skill',
      thumb: vimeoThumb('1991586520-86cad12d74647c01ed4f773c9babce74bd408406112ef3f1d7828337a2441386'),
    }],
  },
  {
    id: 'sword-skill',
    primary: 'games',
    type: 'project',
    kind: 'Combat',
    title: 'Asura sword skill',
    subtitle: 'Roblox · Luau',
    period: '2025',
    summary: 'A melee skill combining stun-lock, movement, impact frames, and animation-timed VFX.',
    highlights: [
      'Stun-lock and forward movement chained into a single combo.',
      'Impact frames that sell each hit.',
      'Animations and VFX keyed to animation events for frame-accurate timing.',
    ],
    stack: ['Luau', 'Animation', 'VFX', 'Combat systems'],
    links: [{ label: 'Watch', url: 'https://vimeo.com/1064299591/75ec594c1f' }],
    media: [{
      kind: 'vimeo', id: '1064299591', hash: '75ec594c1f', title: 'Asura sword skill',
      thumb: vimeoThumb('1991586875-429f7d47854d65df6b51c3cb8035d816b81835fe74b3fee57502bbe6d559eb94'),
    }],
  },
  {
    id: 'luau-modules',
    primary: 'games',
    also: ['software'],
    type: 'project',
    kind: 'Code sample',
    title: 'Matchmaking & wall-run modules',
    subtitle: 'Roblox · Strict Luau',
    period: '2025',
    summary: 'Production-style, strictly typed Luau: a round-based matchmaking service and a configurable wall-run controller.',
    highlights: [
      'Matchmaking as a class, so casual and ranked queues run as independent instances with their own config.',
      'Configurable round time, downtime, group size and per-player blacklists, with history to avoid re-matching the same players.',
      'Pooled physics collision groups to isolate matched groups, plus voice-chat and visibility updates over remote events.',
      'Wall-run controller gated by approach angle, speed and height, with cooldowns, left and right animation sets, mobile controls and signal-based state events.',
    ],
    stack: ['Luau (--!strict)', 'OOP', 'Remote events', 'Physics'],
    links: [{ label: 'Source', url: 'https://github.com/VijJr/demo' }],
  },
  {
    id: 'door-physics',
    primary: 'games',
    type: 'project',
    kind: 'Systems demo',
    title: 'Proximity door physics',
    subtitle: 'Roblox · Luau',
    period: '2025',
    summary: 'Doors that swing open realistically as players approach, using quantized position mapping to keep the per-frame cost low.',
    highlights: [
      'Physically believable swing driven by player approach direction.',
      'Quantized position mapping so proximity checks scale with many doors and players.',
    ],
    stack: ['Luau', 'Physics', 'Spatial partitioning'],
    links: [{ label: 'Channel', url: 'https://www.youtube.com/channel/UCB9liPZa5oAvcG1cUfEQ-8A' }],
  },

  /* ---------------- Robotics ---------------- */
  {
    id: 'diag-glioblastoma',
    primary: 'robotics',
    also: ['software', 'games'],
    cv: true,
    type: 'experience',
    kind: 'Research',
    title: 'University of Michigan, DIAG',
    subtitle: 'Research Team Lead',
    location: 'Ann Arbor, MI',
    period: 'Jan 2024 – Present',
    summary: 'Leading a team of four classifying Glioblastoma Multiforme from whole-slide pathology images with tuned CNN architectures.',
    highlights: [
      'Adapted dozens of premade classification models such as Slideflow with tuned models built on architectures such as ResNet and U-Net, tailored to our novel dataset of 100+ Glioblastoma Multiforme slide images.',
      'Organized a team of 4 to test pre-processing tools such as BayesPrism, WGCNA, and Slideflow.',
      'Ran multiple iteration cycles to refine and tune the models for accuracy and robustness.',
    ],
    stack: ['Python', 'PyTorch', 'Slideflow', 'ResNet', 'U-Net', 'BayesPrism', 'WGCNA'],
    stats: [
      { value: '100+', label: 'Whole-slide images' },
      { value: '4', label: 'Researchers led' },
    ],
    featured: true,
  },
  {
    id: 'umtri-pedestrian',
    primary: 'robotics',
    also: ['software', 'games'],
    cv: true,
    type: 'experience',
    kind: 'Research',
    title: 'UMTRI',
    subtitle: 'Undergraduate Researcher · Dr. Arpan Kusari',
    location: 'Ann Arbor, MI',
    period: '2025',
    summary: 'Novel monocular pedestrian detection for autonomous vehicles, benchmarked on KITTI.',
    context:
      'At the University of Michigan Transportation Research Institute, Dr. Kusari’s group studies robustness in autonomous-vehicle sensing and perception.',
    highlights: [
      'Researched a novel single-camera (monocular) approach to pedestrian detection for autonomous vehicles.',
      'Benchmarked detection performance on the KITTI dataset across its easy, moderate and hard evaluation splits.',
      'Analyzed failure cases to understand where camera-only perception breaks down.',
    ],
    stack: ['Python', 'PyTorch', 'OpenCV', 'KITTI'],
  },
  {
    id: 'mfly-vision',
    primary: 'robotics',
    also: ['software', 'games'],
    cv: true,
    type: 'experience',
    kind: 'Team',
    title: 'M-Fly Autonomous',
    subtitle: 'Computer Vision Sub-lead',
    location: 'Ann Arbor, MI',
    period: 'Sep 2023 – 2025',
    summary: 'Onboard object detection so a fixed-wing aircraft can navigate and drop payloads autonomously.',
    context: 'M-Fly is the University of Michigan’s SAE Aero Design team.',
    highlights: [
      'Implemented a convolutional neural network for object detection on an edge device, with the objective of navigating and dropping payloads autonomously from a fixed-wing aircraft.',
      'Generated training data with OpenCV and NumPy transformations, and tuned the CNN’s hyperparameters for speed and accuracy at 100+ feet above the ground.',
    ],
    stack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Edge inference'],
    stats: [{ value: '100+ ft', label: 'Detection altitude' }],
  },
  {
    id: 'wayne-state-av',
    primary: 'robotics',
    also: ['software', 'games'],
    cv: true,
    type: 'experience',
    kind: 'Research',
    title: 'Wayne State University, Autonomous Vehicle Lab',
    subtitle: 'Assistant Researcher',
    location: 'Detroit, MI',
    period: 'Jun – Aug 2022',
    summary: 'Detecting camera failure in autonomous vehicles before it becomes a perception failure.',
    highlights: [
      'Worked in a 2–3 person team toward a theoretical model for determining autonomous-vehicle camera failure.',
      'Evaluated varying architectures built on OpenCV, reaching ~80% accuracy on generic failure classification across 10,000+ samples.',
    ],
    stack: ['Python', 'OpenCV', 'NumPy'],
    stats: [
      { value: '~80%', label: 'Failure-classification accuracy' },
      { value: '10,000+', label: 'Samples' },
    ],
  },
  {
    id: 'ballbot',
    primary: 'robotics',
    type: 'project',
    kind: 'Class project',
    title: 'Ballbot',
    subtitle: 'ROB 311 · Robot design',
    period: 'Fall 2026',
    status: 'In progress',
    summary: 'An R2-D2-style robot that balances and drives on top of a basketball using three omni-wheels.',
    highlights: [
      'Body rides a basketball on three omni-wheels spaced 120° apart.',
      'Maps desired body motion to individual wheel torques through the three-wheel kinematic model.',
      'Closes the loop on IMU tilt so the robot stays upright while it moves.',
    ],
    stack: ['Feedback control', 'IMU', 'Omni-wheel kinematics', 'Embedded'],
  },
  {
    id: 'laser-pointer',
    primary: 'robotics',
    also: ['software'],
    type: 'project',
    kind: 'Hardware',
    title: 'Robotic laser pointer',
    subtitle: 'Arduino · Java',
    period: '2020 – 2021',
    summary: 'A pan-tilt laser turret that follows your mouse, driven by a Java desktop app over serial.',
    highlights: [
      'Two perpendicular servos give x/y control; the laser diode rides the second servo.',
      'A Java Swing app maps screen coordinates to servo angles and streams them to the Arduino over serial (RXTX).',
      'Out-of-band command values toggle the laser on click without disturbing the angle stream.',
    ],
    sections: [{ title: 'Parts', items: ['Arduino Uno', '2 × Grove servos', 'Grove base shield', '650 nm laser diode', 'Custom enclosure'] }],
    stack: ['Java', 'Swing', 'Arduino', 'Serial'],
    links: [{ label: 'Build log', url: `${WIX}/laser-robot` }],
  },
  {
    id: 'mailbox-alert',
    primary: 'robotics',
    type: 'project',
    kind: 'Hardware',
    title: 'Mailbox alert system',
    subtitle: 'ATtiny85 · HC-12 radio',
    period: '2020 – 2021',
    summary: 'A wireless sensor that alerts the house the moment the mailbox opens, running about a year on one battery.',
    highlights: [
      'Photoresistor in the mailbox wakes an ATtiny85 that radios an indoor Arduino Nano over HC-12, which sounds a buzzer.',
      'MOSFET power-gating for the power-hungry radio plus deep sleep for roughly a year of battery life.',
      'Worked around SoftwareSerial’s conflict with pin-change interrupts by waking on the reset pin instead.',
    ],
    sections: [{ title: 'Parts', items: ['ATtiny85', 'Arduino Nano', '2 × HC-12 transceivers', 'Photoresistor', 'RFP30N06LE MOSFET', '1000 mAh LiPo'] }],
    stack: ['C', 'AVR sleep modes', 'Radio', 'Power management'],
    links: [{ label: 'Build log', url: `${WIX}/mailbox-detection-system` }],
  },
  {
    id: 'gsm-help-button',
    primary: 'robotics',
    type: 'project',
    kind: 'Hardware',
    title: '2G GSM help button',
    subtitle: 'Arduino · SIM800L',
    period: '2020 – 2021',
    summary: 'A low-cost emergency button that texts a caregiver, for regions where commercial alert services are unavailable.',
    highlights: [
      'Press-and-hold powers the circuit; the SIM800L joins the 2G network and sends an SMS via AT commands.',
      'Status LEDs show searching, connected and sent.',
      'Soldered onto a prototype PCB with a LiPo and TP4056 charging.',
    ],
    sections: [{ title: 'Parts', items: ['Arduino Nano', 'SIM800L GSM module', '3.7 V LiPo', 'TP4056 charger', 'Status LEDs'] }],
    stack: ['C++', 'AT commands', 'Cellular', 'PCB soldering'],
    links: [{ label: 'Build log', url: `${WIX}/gsm-2g-help-button` }],
  },
  {
    id: 'ir-receiver',
    primary: 'robotics',
    type: 'project',
    kind: 'Hardware',
    title: 'IR tag receiver',
    subtitle: 'Arduino · IRremote',
    period: '2020 – 2021',
    summary: 'Wearable infrared receivers for a bike-based game of tag, triggered by any TV remote.',
    highlights: [
      'Decodes signals from any standard remote with the IRremote library and sounds a buzzer on hit.',
      'Limited range and sunlight interference were tuned into the game’s difficulty.',
    ],
    stack: ['C++', 'Arduino', 'Infrared'],
    links: [{ label: 'Build log', url: `${WIX}/infer-red-receiver` }],
  },
  {
    id: 'electrophone',
    primary: 'robotics',
    type: 'project',
    kind: 'Hardware',
    title: 'Homemade electrophone',
    subtitle: 'Arduino Nano',
    period: '2020 – 2021',
    summary: 'An eight-button electronic instrument: seven notes plus a stored melody.',
    highlights: [
      'Seven buttons map to notes of a scale through tone(); an eighth plays a stored melody.',
      'Diagnosed false triggers to heat-damaged switches and added debouncing.',
    ],
    stack: ['C++', 'Arduino', 'PCB soldering'],
    links: [{ label: 'Build log', url: `${WIX}/homemade-electrophone` }],
  },
];

/* ------------------------------------------------------------------ */
/* Games shipped                                                      */
/* ------------------------------------------------------------------ */

export const SHIPPED_TITLES: ShippedTitle[] = [
  { name: 'Northside Chicago', studio: 'TheOnlyOrbs', genre: 'Roleplay', visits: '5.2M', status: 'Live', url: 'https://www.roblox.com/games/8596797381/Northside-Chicago' },
  { name: 'Bowling Tycoon', studio: 'Gigabyte Games!', genre: 'Tycoon', visits: '2.6M', status: 'Live', url: 'https://www.roblox.com/games/11395462014/Bowling-Tycoon' },
  { name: 'Federal Prison Roleplay', studio: 'Cowboy’s Projects', genre: 'Roleplay', status: 'Live', url: 'https://www.roblox.com/games/85641688641860/Federal-Prison-Roleplay' },
  { name: 'Signal Lost 2.0', studio: 'NROMM Studios', status: 'In development', url: 'https://www.roblox.com/games/118693189286589/Signal-Lost-2-0' },
  { name: 'Build A Farm', studio: 'NROMM Studios', genre: 'Simulation', status: 'In development', url: 'https://www.roblox.com/games/127210422316772/Build-A-Farm' },
];
export const TITLES_AS_OF = 'Visit counts as of September 2026';

/* ------------------------------------------------------------------ */
/* Education & credentials                                            */
/* ------------------------------------------------------------------ */

export const COURSES: Course[] = [
  { code: 'EECS 281', name: 'Data Structures & Algorithms', grade: 'A-', disciplines: ['software'] },
  { code: 'EECS 370', name: 'Computer Organization', grade: 'A', disciplines: ['software'] },
  { code: 'EECS 484', name: 'Database Management Systems', grade: 'A-', disciplines: ['software'] },
  { code: 'EECS 489', name: 'Computer Networks', grade: 'A', disciplines: ['software', 'games'] },
  { code: 'EECS 398', name: 'Practical Data Science', grade: 'A+', disciplines: ['software'] },
  { name: 'Linear Algebra', grade: 'A-', disciplines: ['software', 'games', 'robotics'] },
  { code: 'EECS 494', name: 'Computer Game Design & Development', grade: 'In progress', disciplines: ['games'] },
  { code: 'EECS 442', name: 'Computer Vision', grade: 'A', disciplines: ['software', 'games', 'robotics'] },
  { code: 'ROB 320', name: 'Robot Operating Systems', grade: 'A', disciplines: ['robotics'] },
  { code: 'ROB 311', name: 'How to Build Robots and Make Them Move', grade: 'In progress', disciplines: ['robotics'] },
  { name: 'Self-Driving Cars', grade: 'In progress', disciplines: ['robotics'] },
  { name: 'Robotic Controls', grade: 'In progress', disciplines: ['robotics'] },
];

export const HONORS: Honor[] = [
  { date: '2023-12-15', name: 'University Honors' },
  { date: '2023-12-31', name: 'Dean’s List' },
  { date: '2024-04-30', name: 'Dean’s List' },
  { date: '2024-05-02', name: 'University Honors' },
  { date: '2024-12-18', name: 'University Honors' },
  { date: '2024-12-31', name: 'Dean’s List' },
  { date: '2025-03-16', name: 'James B. Angell Scholar' },
  { date: '2025-12-17', name: 'University Honors' },
  { date: '2025-12-31', name: 'Dean’s List' },
  { date: '2026-04-30', name: 'Dean’s List' },
  { date: '2026-04-30', name: 'University Honors' },
];

export const RECOGNITION: Recognition[] = [
  { name: 'Google Cloud Professional Machine Learning Engineer', detail: 'Professional certification', image: 'assets/certifications/gcp.png' },
  { name: 'James B. Angell Scholar', detail: 'University of Michigan', year: '2025' },
  { name: 'Presidential Volunteer Service Award', detail: 'Bronze medal', image: 'assets/certifications/pvsa.png' },
  { name: 'HackerRank Project Euler+', detail: 'Top 100 nationally, top 2,000 globally', image: 'assets/certifications/euler.png' },
  { name: 'American Computer Science League', detail: '6th in state' },
  { name: 'Forensics (competitive speech)', detail: 'Regional bronze medal', year: '2024' },
];

export const ACTIVITIES: Activity[] = [
  { role: 'Research Team Lead', org: 'DIAG, University of Michigan', period: '2024 – Present', detail: 'Leading four researchers on glioblastoma slide classification.', workId: 'diag-glioblastoma', discipline: 'robotics' },
  { role: 'Grader', org: 'EECS 442 · Computer Vision', period: '1 semester', detail: 'Graded coursework for the upper-level computer vision course.', discipline: 'robotics' },
  { role: 'Grader', org: 'STATS 250 · Introduction to Statistics', period: '4 semesters', detail: 'Graded labs and homework for one of Michigan’s largest courses.' },
  { role: 'Computer Vision Sub-lead', org: 'M-Fly Autonomous', period: '2023 – 2025', detail: 'Onboard detection for autonomous payload drops.', workId: 'mfly-vision', discipline: 'robotics' },
  { role: 'Co-founder & Lead Developer', org: 'Helivox 501(c)(3)', period: '2021 – 2023', detail: 'Built the platform behind a six-chapter education nonprofit.', workId: 'helivox', discipline: 'software' },
  { role: 'Member', org: 'Forensics speaking team', period: '2024', detail: 'Regional bronze medal.' },
];

/* ------------------------------------------------------------------ */
/* Lookups                                                            */
/* ------------------------------------------------------------------ */

export function discipline(id: Discipline): DisciplineInfo {
  return DISCIPLINES.find(d => d.id === id)!;
}

export function workById(id: string): Work | undefined {
  return WORK.find(w => w.id === id);
}

export function workFor(id: Discipline): Work[] {
  return WORK.filter(w => w.primary === id);
}

/** Entries that live in another discipline but are cross-linked into this one. */
export function linkedInto(id: Discipline): Work[] {
  return WORK.filter(w => w.primary !== id && w.also?.includes(id));
}

/** Catalog code such as SW-01, numbered by order within the primary discipline. */
export function workCode(w: Work): string {
  const n = workFor(w.primary).indexOf(w) + 1;
  return `${discipline(w.primary).code}-${String(n).padStart(2, '0')}`;
}

export interface Term { label: string; honors: Honor[]; }

/** Display order for honors, applied everywhere so every term lists them the same way. */
const HONOR_ORDER = ['University Honors', 'Dean’s List', 'James B. Angell Scholar'];

/** Groups honors into academic terms (Jan–Jun = Winter, Jul–Dec = Fall), in HONOR_ORDER within each term. */
export function honorsByTerm(): Term[] {
  const terms = new Map<string, Honor[]>();
  for (const h of HONORS) {
    const [y, m] = h.date.split('-').map(Number);
    const label = `${m <= 6 ? 'Winter' : 'Fall'} ${y}`;
    terms.set(label, [...(terms.get(label) ?? []), h]);
  }
  const rank = (h: Honor) => HONOR_ORDER.indexOf(h.name);
  return [...terms].map(([label, honors]) => ({ label, honors: honors.sort((a, b) => rank(a) - rank(b)) }));
}

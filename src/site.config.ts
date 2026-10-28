// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
    name: 'David Vadimon',
    role: 'Software engineering student at Sorbonne University, France',
    tagline: 'Here are some of my main projects done so far.',
    description:
        'Projects built by me while studying software engineering at Sorbonne University — web applications, algorithms and simulations.',
    status: 'Currently studying software engineering · Sorbonne University, France',
    nbLastProjects: 5,
    social: [
        { label: 'GitHub', href: 'https://github.com/00David' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-vadimon' },
    ],
    locale: 'en',
} as const;

export const NAV_LINKS = [
    { label: 'Projects', href: '/project' },
    { label: 'About', href: '/about' },
] as const;

// Categories shown line by line on the About page, in this order. Tags are
// matched by exact name against the projects' `tags`; any tag missing here
// lands in "Other". Order inside a list does not matter: tags are sorted
// alphabetically when displayed.
export const TAG_CATEGORIES = [
    {
        label: 'Languages',
        tags: ['Dart', 'Go', 'Haskell', 'Java', 'JavaScript', 'Python', 'TypeScript'],
    },
    {
        label: 'Frameworks',
        tags: ['Django', 'Express', 'Flask', 'Flutter', 'SciJava', 'Spring Boot', 'Tailwind CSS'],
    },
    {
        label: 'Libraries',
        tags: ['customtkinter', 'Gloss', 'Java RMI', 'matplotlib', 'React', 'Swing', 'tkinter'],
    },
    { label: 'Databases', tags: ['MongoDB', 'PostgreSQL', 'SQLite'] },
    { label: 'DevOps & Tooling', tags: ['Docker', 'Docker Compose', 'GitHub Actions', 'Maven'] },
    { label: 'Testing', tags: ['hspec', 'JUnit', 'pytest', 'QuickCheck'] },
    {
        label: 'Other',
        tags: ['Firebase', 'Kafka', 'MCP', 'Node.js', 'Raspberry Pi', 'Render', 'Strapi'],
    },
] as const;

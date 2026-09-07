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
    social: [{ label: 'GitHub', href: 'https://github.com/00David' }],
    locale: 'en',
} as const;

export const NAV_LINKS = [
    { label: 'Projects', href: '/project' },
    { label: 'About', href: '/about' },
] as const;

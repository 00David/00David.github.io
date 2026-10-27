import { TAG_CATEGORIES } from '@/site.config';

// URL-safe form of a tag, e.g. "Tailwind CSS" -> "tailwind-css", "Node.js" -> "node-js".
export function tagSlug(tag: string): string {
    return tag
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

export function tagHref(tag: string): string {
    return `/project/tag/${tagSlug(tag)}`;
}

// Alphabetical, ignoring case: "matplotlib" sorts between "Java RMI" and "React".
export function compareTags(a: string, b: string): number {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
}

// Splits the given tags into the TAG_CATEGORIES order, each list sorted
// alphabetically. Tags not listed in any category go to "Other"; empty
// categories are left out.
export function groupTags(tags: Iterable<string>): { label: string; tags: string[] }[] {
    const remaining = new Set(tags);
    const groups = TAG_CATEGORIES.map(({ label, tags: listed }) => ({
        label: label as string,
        tags: (listed as readonly string[]).filter((tag) => remaining.delete(tag)),
    }));

    const other = groups.find((group) => group.label === 'Other');
    if (other) other.tags.push(...remaining);
    else if (remaining.size > 0) groups.push({ label: 'Other', tags: [...remaining] });

    return groups
        .filter((group) => group.tags.length > 0)
        .map((group) => ({ ...group, tags: group.tags.sort(compareTags) }));
}

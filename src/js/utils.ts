export function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

interface Frontmatter {
    title: string;
    description: string;
    technologies: string;
}

interface Post {
    frontmatter: Frontmatter;
    Content: string;
}

export const getPosts = () => {
    return Object.values(import.meta.glob('../../public/projects/*.md', { eager: true })) as Post[];
}
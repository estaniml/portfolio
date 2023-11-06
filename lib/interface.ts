export interface Project {
    _id: string;
    title: string;
    description: string
    spanishDescription: string
    content: any;
    image: string;
    link: string;
    slug: {
        current: string;
    };
    tools: string[];
    _createdAt: string;
}
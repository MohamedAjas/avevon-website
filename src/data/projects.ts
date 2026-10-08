export interface Project {
    id: string;
    slug: string;
    title: string;
    client: string;
    sector: string;
    category: string;
    shortDescription: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'tech-corp-rebrand',
        title: 'TechCorp Asia Identity Activation',
        client: 'TechCorp Holdings',
        sector: 'Technology',
        category: 'Advertising & Brand Activation',
        shortDescription: 'A comprehensive brand activation campaign repositioning TechCorp for the Asian market.',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: '2',
        slug: 'finance-summit-2025',
        title: 'Global Finance Summit 2025',
        client: 'International Finance Group',
        sector: 'Finance',
        category: 'Events',
        shortDescription: 'End-to-end event production for a 500-delegate international financial conference in Colombo.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: '3',
        slug: 'eco-fashion-pr',
        title: 'Sustainable Threads PR Campaign',
        client: 'EcoWear Sri Lanka',
        sector: 'Retail & Fashion',
        category: 'Public Relations',
        shortDescription: 'Strategic media relations campaign resulting in top-tier coverage across regional lifestyle publications.',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: '4',
        slug: 'fdi-promotion-board',
        title: 'Investment Attraction Strategy',
        client: 'Regional Development Board',
        sector: 'Government',
        category: 'Investment Promotion',
        shortDescription: 'B2B engagement and promotional materials targeting global manufacturing investments.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop'
    }
];

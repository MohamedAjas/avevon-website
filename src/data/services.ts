export interface Service {
    id: string;
    number: string;
    title: string;
    shortDescription: string;
    headline: string;
    slug: string;
    capabilities: string[];
    cta: string;
    image: string;
}

export const services: Service[] = [
    {
        id: '1',
        number: '01',
        title: 'Public Relations',
        shortDescription: 'Give your story a clear voice.',
        headline: 'Give your story a clear voice',
        slug: 'public-relations',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
        capabilities: [
            'Media relations', 'Press releases', 'Press conferences',
            'Press tours and interviews', 'Corporate communications',
            'Brand storytelling', 'Feature articles', 'Opinion pieces',
            'Copywriting', 'Crisis communications', 'Product and service launch communications',
            'Speaking opportunities', 'Seasonal features and gift guides'
        ],
        cta: 'Discuss Your PR Needs'
    },
    {
        id: '2',
        number: '02',
        title: 'Digital Marketing',
        shortDescription: 'Connect with the people who matter to your brand.',
        headline: 'Connect with the people who matter to your brand',
        slug: 'digital-marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        capabilities: [
            'Strategy and planning', 'Social media management',
            'Audience growth and engagement', 'Content marketing',
            'Paid social campaigns', 'Influencer campaigns',
            'Website content', 'Search visibility'
        ],
        cta: 'Plan Your Digital Campaign'
    },
    {
        id: '3',
        number: '03',
        title: 'Events',
        shortDescription: 'Make your event impossible to ignore.',
        headline: 'Make your event impossible to ignore',
        slug: 'events',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
        capabilities: [
            'Product launches', 'Service launches', 'Conferences',
            'Corporate events', 'Exhibitions', 'Promotional stalls',
            'Private events', 'Celebrations', 'Capacity planning',
            'Concept development', 'Graphic design', 'Invitations',
            'Venue sourcing', 'Budget development', 'Delivery schedules',
            'Décor', 'Fabrication', 'Floral design', 'Table design', 'Lighting',
            'Sound', 'Video', 'Multimedia', 'Guest lists', 'RSVP management',
            'Supplier sourcing', 'Contract coordination', 'Catering consultation',
            'Event staffing', 'Speakers', 'Entertainers', 'Talent coordination',
            'Sponsorship', 'Media engagement', 'Hospitality', 'Travel', 'Protocol',
            'On-site management', 'Event logistics'
        ],
        cta: 'Tell Us About Your Event'
    },
    {
        id: '4',
        number: '04',
        title: 'Advertising & Brand Activation',
        shortDescription: 'Bring your brand into everyday view.',
        headline: 'Bring your brand into everyday view',
        slug: 'advertising',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
        capabilities: [
            'Print advertising', 'Broadcast advertising', 'Digital advertising',
            'Advertorials', 'Sponsored content', 'Outdoor advertising',
            'Transport advertising', 'Roadshows', 'Mall activations',
            'Email campaigns', 'SMS campaigns', 'International promotions',
            'International advertising'
        ],
        cta: 'Discuss an Advertising Campaign'
    },
    {
        id: '5',
        number: '05',
        title: 'Investment Promotion & Business Facilitation',
        shortDescription: 'Present opportunities and build business connections.',
        headline: 'Present opportunities and build business connections',
        slug: 'investment-promotion',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
        capabilities: [
            'Opportunity positioning', 'Promotional materials',
            'Business introductions', 'Partner sourcing', 'B2B engagement',
            'B2G engagement', 'Customer engagement', 'Market entry communications',
            'International communications', 'Project information',
            'Feasibility coordination', 'Approval process coordination',
            'Public affairs', 'Advocacy'
        ],
        cta: 'Discuss Your Business Objectives'
    },
];

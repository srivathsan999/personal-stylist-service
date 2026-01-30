/* 
 * ANTIGRAVITY - Personal Stylist Template
 * Services Data and Dynamic Loading
 */

const servicesData = {
    'style-consultation': {
        title: 'Style Consultation',
        subtitle: 'An in-depth analysis of your current style, body shape, and color palette to create a foundation for your new look.',
        image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'Our Style Consultation is the ultimate first step in your transformation journey. We go beyond just clothes; we analyze your personality, lifestyle, and professional goals to define a style that is authentically yours. Understanding your body proportions and color theory is key to making shopping easier and more effective.',
        included: [
            '1.5 Hour In-Depth Style Assessment',
            'Full Body Shape & Proportion Analysis',
            'Personalized Color Palette Development',
            'Lifestyle Needs & Goals Mapping',
            'Digital Style Inspiration Board'
        ],
        price: '299'
    },
    'personal-shopping': {
        title: 'Personal Shopping Experience',
        subtitle: 'Rediscover the joy of dressing up without the stress of shopping. We curate the perfect pieces for you.',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'Our Personal Shopping service is designed for individuals who want to look their best but lack the time or inclination to shop. Whether you need a complete wardrobe overhaul or a few key pieces for the season, we handle everything from pre-selection to fitting. We find hidden gems that align with your personal brand.',
        included: [
            'Initial Style Consultation (Virtual)',
            'Curated Selection of 10-15 Items',
            'Private Fitting Session in-store/home',
            'Returns & Exchange Management',
            'Digital Lookbook of New Outfits'
        ],
        price: '499'
    },
    'wardrobe-detox': {
        title: 'Wardrobe Detox & Audit',
        subtitle: 'Streamline your closet by removing items that no longer serve you and organizing what remains for maximum efficiency.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'A closet full of clothes but nothing to wear? Our Wardrobe Detox helps you clear the clutter and rediscover lost favorites. We audit every item in your wardrobe, deciding what to keep, tailor, donate, or sell. We then organize your space so you can get dressed effortlessly every morning.',
        included: [
            '3-Hour In-Home Wardrobe Audit',
            'Keep/Tailor/Donate/Sell Categorization',
            'New Outfit Combinations using Current Clothes',
            'Identification of Wardrobe "Gaps"',
            'Custom Closet Organization Plan'
        ],
        price: '399'
    },
    'photoshoot-styling': {
        title: 'Photoshoot & Media Styling',
        subtitle: 'Look your best on camera with professional styling for headshots, brand campaigns, or family portraits.',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'Camera-ready styling is different from day-to-day fashion. We understand how fabrics, colors, and textures interact with camera flashes and lighting. Whether it is a corporate headshot, a commercial campaign, or a personal editorial, we ensure you project the exact image required for the project.',
        included: [
            'Concept Development & Moodboarding',
            'Wardrobe Sourcing & Preparation',
            'On-Set Styling & Clothing Management',
            'Accessory & Jewelry Coordination',
            'Final Retouching Coordination'
        ],
        price: '599'
    },
    'corporate-image': {
        title: 'Corporate Image Consulting',
        subtitle: 'Elevate your professional presence with attire that commands respect and reflects your ambition.',
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'In the professional world, your image is your first resume. We work with executives and business professionals to refine their look for the boardroom, public speaking, and high-stakes meetings. We focus on power dressing, fit, and grooming to ensure your appearance matches your professional expertise.',
        included: [
            'Professional Brand Identity Assessment',
            'Executive Wardrobe Strategy',
            'Tailoring & Fit Perfection',
            'Grooming & Presentation Advice',
            'Public Appearance Prep'
        ],
        price: '799'
    },
    'event-styling': {
        title: 'Special Event Styling',
        subtitle: 'Ensure you turn heads at your next gala, wedding, or red carpet event with a perfectly coordinated ensemble.',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        about: 'For life’s biggest moments, you deserve an unforgettable look. From black-tie galas to red carpet events and luxury weddings, we source exclusive pieces and coordinate every detail of your ensemble—from shoes to jewelry—leaving you free to enjoy the celebration.',
        included: [
            'Event-Specific Style Discovery',
            'VIP Sourcing of Designer Apparel',
            'Jewelry & Accessory Coordination',
            'Final Fitting & Alternation Management',
            'Dress Code Etiquette Guidance'
        ],
        price: '649'
    }
};

window.initServiceDetails = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = urlParams.get('service') || 'personal-shopping'; // Default
    const data = servicesData[serviceSlug];

    if (!data) return;

    // Update Meta Title
    document.title = `ANTIGRAVITY | ${data.title}`;

    // Update Hero Content
    document.getElementById('service-title').innerText = data.title;
    document.getElementById('service-subtitle').innerText = data.subtitle;

    // Update Main Image
    const mainImg = document.getElementById('service-image');
    mainImg.src = data.image;
    mainImg.alt = data.title;

    // Update About Text
    document.getElementById('service-about').innerText = data.about;

    // Update Included List
    const listContainer = document.getElementById('service-included');
    listContainer.innerHTML = '';
    data.included.forEach(item => {
        const li = document.createElement('li');
        li.style.marginBottom = '0.5rem';
        li.innerHTML = `<i class="fas fa-check text-accent" style="margin-right: 0.5rem;"></i> ${item}`;
        listContainer.appendChild(li);
    });

    // Update Price
    document.getElementById('service-price').innerHTML = `$${data.price} <span style="font-size: 1rem; color: var(--color-subtext); font-family: var(--font-body);">/ session</span>`;
};

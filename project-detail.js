// Project Data
const projectsData = {
    1: {
        title: "Modern Villa",
        category: "Residential",
        location: "Yangon, Myanmar",
        year: "2024",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
        description: "A contemporary residential masterpiece that seamlessly blends modern architecture with traditional Myanmar design elements. This villa represents the perfect harmony between indoor and outdoor living spaces, featuring expansive glass walls, natural materials, and sustainable design principles.",
        client: "Private Client",
        area: "450 sqm",
        buildingArea: "450 sqm",
        landArea: "800 sqm",
        floors: "2 Floors + Rooftop",
        bedrooms: "4 Bedrooms",
        bathrooms: "5 Bathrooms",
        status: "Completed",
        completionDate: "March 2024",
        services: "Architecture, Interior Design, Landscape Design",
        architect: "Kraft Studio",
        contractor: "Premium Builders Co.",
        structuralEngineer: "Myanmar Structural Consultants",
        overviewImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
        concept: "The design concept revolves around creating a fluid connection between the interior spaces and the lush tropical garden. Large sliding glass doors dissolve the boundaries, while carefully positioned courtyards bring natural light deep into the home. The material palette of concrete, wood, and stone creates a warm, inviting atmosphere that celebrates both modern aesthetics and traditional craftsmanship.",
        designPhilosophy: "Our approach emphasizes the relationship between architecture and nature, creating spaces that breathe and flow. The villa is designed as a series of interconnected pavilions, each with its own character while maintaining visual and spatial continuity throughout.",
        fullImage1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
        siteDescription: "Located in a quiet residential neighborhood in Yangon, the site offers privacy while maintaining easy access to the city center. The plot's natural slope was utilized to create distinct living zones across multiple levels, maximizing views and natural ventilation.",
        siteAddress: "Golden Valley, Yangon, Myanmar",
        siteArea: "800 sqm",
        siteOrientation: "South-facing with garden views",
        climate: "Tropical monsoon climate",
        galleryImages: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop"
        ],
        materials: [
            "Exposed concrete walls and ceilings",
            "Teak wood flooring throughout",
            "Natural stone cladding on exterior",
            "Floor-to-ceiling glass panels",
            "Aluminum window frames",
            "Granite kitchen countertops"
        ],
        features: [
            "25m infinity pool with deck",
            "Rooftop terrace with city views",
            "Smart home automation system",
            "Private home cinema room",
            "Wine cellar and bar area",
            "Landscaped tropical garden",
            "Covered parking for 3 cars",
            "Staff quarters"
        ],
        sustainability: [
            "Solar panels for hot water heating",
            "Rainwater harvesting system (5,000L capacity)",
            "Natural cross-ventilation design",
            "LED lighting throughout",
            "High-performance insulated glazing",
            "Native plant landscaping",
            "Greywater recycling for irrigation",
            "Energy-efficient HVAC system"
        ],
        spaces: [
            { name: "Living Room", area: "65 sqm" },
            { name: "Dining Room", area: "40 sqm" },
            { name: "Kitchen", area: "35 sqm" },
            { name: "Master Bedroom", area: "50 sqm" },
            { name: "Bedroom 2", area: "30 sqm" },
            { name: "Bedroom 3", area: "28 sqm" },
            { name: "Bedroom 4", area: "25 sqm" },
            { name: "Home Office", area: "20 sqm" },
            { name: "Cinema Room", area: "30 sqm" },
            { name: "Pool Deck", area: "80 sqm" }
        ],
        awards: [
            "Best Residential Design 2024 - Myanmar Architecture Awards",
            "Sustainable Design Excellence - Green Building Council"
        ],
        nextProject: 2
    },
    2: {
        title: "Minimalist Apartment",
        category: "Residential",
        location: "Mandalay, Myanmar",
        year: "2023",
        heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
        description: "An elegant urban apartment that embodies the principles of minimalist design. Every element serves a purpose, creating a serene living environment that maximizes space and natural light while maintaining a sophisticated aesthetic.",
        client: "Young Professional",
        area: "120 sqm",
        buildingArea: "120 sqm",
        landArea: "N/A (Apartment)",
        floors: "Single Level (15th Floor)",
        bedrooms: "2 Bedrooms",
        bathrooms: "2 Bathrooms",
        status: "Completed",
        completionDate: "September 2023",
        services: "Interior Design, Space Planning, Furniture Selection",
        architect: "Kraft Studio",
        contractor: "Interior Solutions Myanmar",
        structuralEngineer: "N/A (Existing Building)",
        overviewImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop",
        concept: "Less is more. The design strips away unnecessary elements to reveal the essential beauty of space, light, and form. A neutral color palette creates calm, while carefully selected furniture pieces add character without clutter. Every detail is intentional, from the hidden storage solutions to the carefully curated art pieces.",
        designPhilosophy: "Minimalism is not about having less, but about making room for more of what matters. This apartment celebrates simplicity, functionality, and the beauty of well-crafted spaces that enhance daily living.",
        fullImage1: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1920&h=1080&fit=crop",
        siteDescription: "Situated on the 15th floor of a modern high-rise in Mandalay's business district, the apartment offers panoramic city views and abundant natural light throughout the day. The elevated position provides privacy and stunning sunset views.",
        siteAddress: "City Center, Mandalay, Myanmar",
        siteArea: "120 sqm",
        siteOrientation: "East and West facing",
        climate: "Urban high-rise environment",
        galleryImages: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
        ],
        materials: [
            "White oak engineered flooring",
            "Italian marble countertops",
            "Matte black metal fixtures",
            "Sheer linen curtains",
            "White lacquered cabinetry",
            "Concrete-look porcelain tiles"
        ],
        features: [
            "Custom built-in storage throughout",
            "Open-plan living and dining",
            "Walk-in closet with lighting",
            "Balcony garden with planters",
            "Hidden laundry area",
            "Smart lighting system",
            "Concealed air conditioning",
            "Premium kitchen appliances"
        ],
        sustainability: [
            "Energy-efficient LED lighting",
            "Low-VOC paints and finishes",
            "Natural and recycled materials",
            "Maximized natural daylight",
            "Energy Star appliances",
            "Water-saving fixtures"
        ],
        spaces: [
            { name: "Living & Dining", area: "45 sqm" },
            { name: "Kitchen", area: "12 sqm" },
            { name: "Master Bedroom", area: "25 sqm" },
            { name: "Bedroom 2", area: "15 sqm" },
            { name: "Master Bathroom", area: "8 sqm" },
            { name: "Guest Bathroom", area: "5 sqm" },
            { name: "Balcony", area: "10 sqm" }
        ],
        awards: [],
        nextProject: 3
    },
    3: {
        title: "Contemporary House",
        category: "Residential",
        location: "Yangon, Myanmar",
        year: "2024",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
        description: "A striking contemporary residence that pushes the boundaries of modern residential architecture. Bold geometric forms, innovative materials, and sustainable technologies come together to create a home for the future.",
        client: "Private Family",
        area: "380 sqm",
        buildingArea: "380 sqm",
        landArea: "650 sqm",
        floors: "3 Floors",
        bedrooms: "5 Bedrooms",
        bathrooms: "4 Bathrooms",
        status: "Under Construction",
        completionDate: "Expected December 2024",
        services: "Architecture, Interior Design, Landscape Design",
        architect: "Kraft Studio",
        contractor: "Modern Build Myanmar",
        structuralEngineer: "Advanced Structures Ltd.",
        overviewImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
        concept: "The design explores the relationship between solid and void, creating dramatic spaces through the interplay of light and shadow. Cantilevered volumes and double-height spaces add architectural drama while maintaining functional efficiency. The house is conceived as a sculptural object that responds to its urban context.",
        designPhilosophy: "Contemporary architecture should challenge conventions while remaining deeply functional. This residence demonstrates how bold geometric forms can create inspiring living spaces that are both beautiful and practical.",
        fullImage1: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop",
        siteDescription: "A corner plot in an established residential area provides opportunities for multiple orientations and garden spaces. The design takes advantage of prevailing breezes for natural cooling and maximizes privacy while maintaining street presence.",
        siteAddress: "Bahan Township, Yangon, Myanmar",
        siteArea: "650 sqm",
        siteOrientation: "Corner plot, North-South axis",
        climate: "Tropical monsoon with hot season",
        galleryImages: [
            "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
        ],
        materials: [
            "Fiber cement panel cladding",
            "Aluminum composite panels",
            "Polished concrete floors",
            "Frameless glass balustrades",
            "Steel structural elements",
            "Timber accent walls"
        ],
        features: [
            "Extensive green roof system",
            "Underground parking for 4 cars",
            "Dedicated home office suite",
            "Outdoor kitchen and BBQ area",
            "Gym and wellness room",
            "Double-height living space",
            "Cantilevered upper floor",
            "Integrated landscape design"
        ],
        sustainability: [
            "Passive cooling design strategies",
            "Greywater recycling system",
            "Native plant landscaping",
            "High-performance low-E glazing",
            "Solar-ready roof structure",
            "Natural ventilation throughout",
            "Rainwater collection",
            "Green roof for insulation"
        ],
        spaces: [
            { name: "Living Room", area: "55 sqm" },
            { name: "Dining Area", area: "30 sqm" },
            { name: "Kitchen", area: "28 sqm" },
            { name: "Master Suite", area: "45 sqm" },
            { name: "Bedroom 2", area: "25 sqm" },
            { name: "Bedroom 3", area: "22 sqm" },
            { name: "Bedroom 4", area: "20 sqm" },
            { name: "Bedroom 5", area: "18 sqm" },
            { name: "Home Office", area: "25 sqm" },
            { name: "Gym", area: "30 sqm" }
        ],
        awards: [],
        nextProject: 4
    },
    4: {
        title: "Boutique Hotel",
        category: "Hotels & Schools",
        location: "Bagan, Myanmar",
        year: "2024",
        heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop",
        description: "A luxury boutique hotel that celebrates Myanmar's rich cultural heritage while offering world-class modern amenities. The design draws inspiration from traditional Bagan architecture, reinterpreted through a contemporary lens.",
        client: "Heritage Hospitality Group",
        area: "2,500 sqm",
        buildingArea: "2,500 sqm",
        landArea: "5,000 sqm",
        floors: "2 Floors + Rooftop",
        bedrooms: "25 Luxury Suites",
        bathrooms: "25 En-suite + Public Facilities",
        status: "Completed",
        completionDate: "January 2024",
        services: "Architecture, Interior Design, Landscape Design, Branding",
        architect: "Kraft Studio",
        contractor: "Heritage Builders Myanmar",
        structuralEngineer: "Traditional & Modern Engineering",
        overviewImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=1000&fit=crop",
        concept: "The hotel design creates an immersive cultural experience through spatial sequences that echo traditional Myanmar monasteries and palaces. Local materials and craftsmanship are showcased throughout, creating authentic connections to place. Each space tells a story of Bagan's rich history while providing contemporary comfort.",
        designPhilosophy: "Hospitality design should honor local culture while meeting international standards. This project demonstrates how traditional architectural language can be translated into modern luxury experiences that benefit local communities.",
        fullImage1: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop",
        siteDescription: "Nestled among ancient temples in Bagan's archaeological zone, the site required sensitive design to respect the historical context while creating a memorable guest experience. The low-rise design ensures views are not obstructed and the scale respects surrounding monuments.",
        siteAddress: "Old Bagan, Mandalay Region, Myanmar",
        siteArea: "5,000 sqm",
        siteOrientation: "Temple views to the East",
        climate: "Hot and dry with distinct seasons",
        galleryImages: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop"
        ],
        materials: [
            "Reclaimed teak from old buildings",
            "Local Bagan sandstone",
            "Handmade terracotta tiles",
            "Traditional bamboo screens",
            "Natural fiber textiles",
            "Copper and brass fixtures"
        ],
        features: [
            "25 luxury suites with temple views",
            "50m infinity pool overlooking plains",
            "Full-service spa & wellness center",
            "Rooftop restaurant and bar",
            "Traditional cooking classes",
            "Curated art gallery",
            "Bicycle rental service",
            "Temple tour arrangements",
            "Library and reading room",
            "Meditation pavilion"
        ],
        sustainability: [
            "Traditional passive cooling techniques",
            "100% local material sourcing",
            "Water conservation and recycling",
            "Community employment program",
            "Solar water heating",
            "Natural ventilation design",
            "Local artisan partnerships",
            "Organic garden for restaurant"
        ],
        spaces: [
            { name: "Reception & Lobby", area: "150 sqm" },
            { name: "Restaurant", area: "200 sqm" },
            { name: "Rooftop Bar", area: "180 sqm" },
            { name: "Spa Facility", area: "300 sqm" },
            { name: "Pool Area", area: "400 sqm" },
            { name: "Guest Suites (avg)", area: "45 sqm each" },
            { name: "Gallery Space", area: "100 sqm" },
            { name: "Gardens", area: "2,000 sqm" }
        ],
        awards: [
            "Best Heritage Hotel Design 2024 - Asia Pacific Hotel Awards",
            "Cultural Preservation Award - Myanmar Tourism Board",
            "Sustainable Tourism Excellence - Green Hotels Association"
        ],
        nextProject: 1
    }
};

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id') || '1';
const project = projectsData[projectId];

// Populate page with project data
if (project) {
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectLocation').textContent = project.location;
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('heroImage').src = project.heroImage;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectClient').textContent = project.client;
    document.getElementById('projectArea').textContent = project.area;
    document.getElementById('projectStatus').textContent = project.status;
    document.getElementById('projectServices').textContent = project.services;
    document.getElementById('overviewImage').src = project.overviewImage;
    document.getElementById('conceptText').textContent = project.concept;
    document.getElementById('fullImage1').src = project.fullImage1;
    document.getElementById('siteDescription').textContent = project.siteDescription;
    document.getElementById('siteAddress').textContent = project.siteAddress;
    document.getElementById('siteArea').textContent = project.siteArea;
    document.getElementById('siteOrientation').textContent = project.siteOrientation;
    
    // Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    project.galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${img}" alt="Gallery Image">`;
        galleryGrid.appendChild(item);
    });
    
    // Materials
    const materialsList = document.getElementById('materialsList');
    project.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });
    
    // Features
    const featuresList = document.getElementById('featuresList');
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Sustainability
    const sustainabilityList = document.getElementById('sustainabilityList');
    project.sustainability.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        sustainabilityList.appendChild(li);
    });
    
    // Next Project
    const nextProject = projectsData[project.nextProject];
    if (nextProject) {
        document.getElementById('nextProjectLink').href = `project-detail.html?id=${project.nextProject}`;
        document.getElementById('nextProjectImage').src = nextProject.heroImage;
        document.getElementById('nextProjectTitle').textContent = nextProject.title;
    }
}

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


// Page loader
function hideLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
}

// Scroll progress indicator
function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    }
}

window.addEventListener('scroll', updateScrollIndicator);

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(item);
    });
    
    hideLoader();
    updateScrollIndicator();
});

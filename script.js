// Three.js Scene Setup
let scene, camera, renderer, floorPlan, building;
let isTransitioning = false;
let transitionProgress = 0;

function init3D() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    // Camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);
    
    // Renderer
    const canvas = document.getElementById('canvas3d');
    renderer = new THREE.WebGLRenderer({ 
        canvas, 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);
    
    // Create Floor Plan
    createFloorPlan();
    
    // Create Building
    createBuilding();
    
    // Animation
    animate();
    
    // Handle scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', onWindowResize);
}

function createFloorPlan() {
    const group = new THREE.Group();
    
    // Floor plan base
    const floorGeometry = new THREE.PlaneGeometry(8, 6);
    const floorMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xf0f0f0,
        side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);
    
    // Walls (2D lines)
    const wallMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    
    // Outer walls
    const outerPoints = [
        new THREE.Vector3(-4, 0.01, -3),
        new THREE.Vector3(4, 0.01, -3),
        new THREE.Vector3(4, 0.01, 3),
        new THREE.Vector3(-4, 0.01, 3),
        new THREE.Vector3(-4, 0.01, -3)
    ];
    const outerGeometry = new THREE.BufferGeometry().setFromPoints(outerPoints);
    const outerWall = new THREE.Line(outerGeometry, wallMaterial);
    group.add(outerWall);
    
    // Inner walls
    const innerPoints1 = [
        new THREE.Vector3(-4, 0.01, 0),
        new THREE.Vector3(0, 0.01, 0)
    ];
    const innerGeometry1 = new THREE.BufferGeometry().setFromPoints(innerPoints1);
    const innerWall1 = new THREE.Line(innerGeometry1, wallMaterial);
    group.add(innerWall1);
    
    const innerPoints2 = [
        new THREE.Vector3(0, 0.01, -3),
        new THREE.Vector3(0, 0.01, 3)
    ];
    const innerGeometry2 = new THREE.BufferGeometry().setFromPoints(innerPoints2);
    const innerWall2 = new THREE.Line(innerGeometry2, wallMaterial);
    group.add(innerWall2);
    
    floorPlan = group;
    scene.add(floorPlan);
}

function createBuilding() {
    const group = new THREE.Group();
    
    // Main building structure
    const buildingGeometry = new THREE.BoxGeometry(8, 4, 6);
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xe0e0e0,
        metalness: 0.1,
        roughness: 0.8
    });
    const mainBuilding = new THREE.Mesh(buildingGeometry, buildingMaterial);
    mainBuilding.position.y = 2;
    group.add(mainBuilding);
    
    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x4a90e2,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.6
    });
    
    // Front windows
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            const windowGeometry = new THREE.BoxGeometry(0.8, 1, 0.1);
            const window = new THREE.Mesh(windowGeometry, windowMaterial);
            window.position.set(-2 + i * 2, 1.5 + j * 1.5, 3.05);
            group.add(window);
        }
    }
    
    // Roof
    const roofGeometry = new THREE.ConeGeometry(6, 1.5, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x2a2a2a,
        metalness: 0.3,
        roughness: 0.7
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 4.75;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);
    
    building = group;
    building.visible = false;
    scene.add(building);
}

function handleScroll() {
    const scrollPercent = window.scrollY / (window.innerHeight * 0.8);
    transitionProgress = Math.min(Math.max(scrollPercent, 0), 1);
    
    // Transition between floor plan and building
    if (transitionProgress < 0.5) {
        floorPlan.visible = true;
        building.visible = false;
        
        // Rotate floor plan
        floorPlan.rotation.y = transitionProgress * Math.PI * 2;
        camera.position.y = 5 + transitionProgress * 3;
    } else {
        floorPlan.visible = false;
        building.visible = true;
        
        // Rotate building
        const buildingProgress = (transitionProgress - 0.5) * 2;
        building.rotation.y = buildingProgress * Math.PI * 0.5;
        camera.position.y = 8 - buildingProgress * 2;
        camera.position.z = 10 - buildingProgress * 2;
    }
}

function animate() {
    requestAnimationFrame(animate);
    
    // Subtle rotation when not scrolling
    if (transitionProgress === 0) {
        floorPlan.rotation.y += 0.002;
    }
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize project cards with mini 3D scenes
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const canvas = card.querySelector('.project-canvas');
        if (!canvas) return;
        
        // Create mini scene for each project
        const miniScene = new THREE.Scene();
        miniScene.background = new THREE.Color(0xf5f5f5);
        
        const miniCamera = new THREE.PerspectiveCamera(45, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
        miniCamera.position.set(0, 3, 5);
        miniCamera.lookAt(0, 0, 0);
        
        const miniRenderer = new THREE.WebGLRenderer({ antialias: true });
        miniRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        canvas.appendChild(miniRenderer.domElement);
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        miniScene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(3, 5, 3);
        miniScene.add(directionalLight);
        
        // Create simple building for each project
        const geometry = new THREE.BoxGeometry(2, 2 + index * 0.5, 2);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0xe0e0e0,
            metalness: 0.1,
            roughness: 0.8
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = 1 + index * 0.25;
        miniScene.add(mesh);
        
        // Animate
        function animateMini() {
            requestAnimationFrame(animateMini);
            mesh.rotation.y += 0.005;
            miniRenderer.render(miniScene, miniCamera);
        }
        animateMini();
    });
}

// Parallax Scroll Effect
let scrollY = 0;
let currentScrollY = 0;
const smoothness = 0.1;

function smoothScroll() {
    currentScrollY += (scrollY - currentScrollY) * smoothness;
    
    // Apply parallax to sections
    const introduction = document.querySelector('.introduction');
    const projects = document.querySelector('.projects');
    const about = document.querySelector('.about');
    
    if (introduction) {
        const introOffset = currentScrollY * 0.5;
        introduction.style.transform = `translateY(${introOffset}px)`;
    }
    
    if (projects) {
        const projectsOffset = (currentScrollY - projects.offsetTop) * 0.3;
        if (currentScrollY > projects.offsetTop - window.innerHeight) {
            projects.style.transform = `translateY(${projectsOffset}px)`;
        }
    }
    
    if (about) {
        const aboutOffset = (currentScrollY - about.offsetTop) * 0.2;
        if (currentScrollY > about.offsetTop - window.innerHeight) {
            about.style.transform = `translateY(${aboutOffset}px)`;
        }
    }
    
    requestAnimationFrame(smoothScroll);
}

window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
});

// Navigation scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
function observeElements() {
    const projectCards = document.querySelectorAll('.project-card');
    const stats = document.querySelectorAll('.stat');
    const aboutText = document.querySelector('.about-text');
    const aboutStats = document.querySelector('.about-stats');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    stats.forEach(stat => observer.observe(stat));
    
    if (aboutText) observer.observe(aboutText);
    if (aboutStats) observer.observe(aboutStats);
    if (contactInfo) observer.observe(contactInfo);
    if (contactForm) observer.observe(contactForm);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Project card click navigation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        window.location.href = `project-detail.html?id=${projectId}`;
    });
});

// Form submission
const contactFormElement = document.querySelector('.contact-form');
if (contactFormElement) {
    contactFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Cursor effect (optional - BAMO style)
let cursor = null;
let cursorFollower = null;

function initCustomCursor() {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: #000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.2s ease;
        mix-blend-mode: difference;
    `;
    
    cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.3s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = (followerX - 20) + 'px';
        cursorFollower.style.top = (followerY - 20) + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
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

// Page loader
function hideLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
}

// Image lazy loading with fade-in
function initImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Initialize
window.addEventListener('load', () => {
    init3D();
    setTimeout(initProjectCards, 100);
    observeElements();
    smoothScroll();
    hideLoader();
    initImageLoading();
    updateScrollIndicator();
    
    // Only init custom cursor on desktop
    if (window.innerWidth > 1024) {
        initCustomCursor();
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });

    // Form submission
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const order = document.getElementById('order').value;
        
        // Simple validation
        if (!name || !email || !phone || !order) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Order request received! We\'ll contact you shortly to confirm your order.');
        
        // Reset form
        orderForm.reset();
    });

    // Initialize - show home section
    showSection('home');
});

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle menu category
function toggleCategory(categoryId) {
    const categoryItems = document.getElementById(categoryId);
    const header = categoryItems.previousElementSibling;
    const icon = header.querySelector('i');
    
    if (categoryItems.classList.contains('active')) {
        categoryItems.classList.remove('active');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
    } else {
        // Close all other categories
        document.querySelectorAll('.category-items').forEach(items => {
            items.classList.remove('active');
        });
        document.querySelectorAll('.category-header i').forEach(i => {
            i.classList.remove('fa-chevron-down');
            i.classList.add('fa-chevron-right');
        });
        
        // Open this category
        categoryItems.classList.add('active');
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    }
}

// Initialize first category as open
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        toggleCategory('milk-teas');
    }, 100);
});

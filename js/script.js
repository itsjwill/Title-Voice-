// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initTestimonials();
    initLogoCarousel();
    initSmoothScrolling();
    initFeatureTabs();
    initFramerAnimations();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky navigation on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-title, .metric-item, .demo-card, .result-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Testimonials carousel
function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const cardWidth = 400;
    const gap = 40;
    const totalWidth = cardWidth + gap;
    
    // Auto-advance testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateTestimonialPosition();
    }, 5000);
    
    function updateTestimonialPosition() {
        const translateX = -currentIndex * totalWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
    
    // Make functions globally available
    window.nextTestimonial = function() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateTestimonialPosition();
    };
    
    window.prevTestimonial = function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateTestimonialPosition();
    };
}

// Logo carousel pause on hover
function initLogoCarousel() {
    const logoTracks = document.querySelectorAll('.logo-track');
    
    logoTracks.forEach(track => {
        track.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        track.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Banner close functionality
function closeBanner() {
    const banner = document.getElementById('topBanner');
    if (banner) {
        banner.style.display = 'none';
        // Adjust body padding if needed
        document.body.style.paddingTop = '0';
    }
}

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.demo-card, .result-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Logo hover effects
document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo-placeholder');
    
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'grayscale(0%)';
            this.style.borderColor = '#667eea';
            this.style.color = '#667eea';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'grayscale(100%)';
            this.style.borderColor = '#e2e8f0';
            this.style.color = '#4a5568';
        });
    });
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Form handling (if forms are added later)
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            const formData = new FormData(this);
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Show success message
            showNotification('Thank you! We\'ll be in touch soon.', 'success');
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : '#4299e1'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .nav-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent,
                button_location: this.closest('section')?.className || 'unknown'
            });
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Accessibility improvements
function initAccessibility() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #667eea';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Feature tabs functionality
function initFeatureTabs() {
    const tabs = document.querySelectorAll('.feature-tab');
    const panels = document.querySelectorAll('.feature-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Framer Motion Animations
function initFramerAnimations() {
    // Enhanced animation system inspired by Pam HQ
    const animationConfig = {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
        stagger: 0.1
    };

    // Page load sequence
    const pageLoadSequence = () => {
        // Hero section entrance
        const heroElements = [
            { selector: '.hero-title', delay: 0, direction: 'up' },
            { selector: '.hero-subtitle', delay: 0.2, direction: 'up' },
            { selector: '.hero-ctas', delay: 0.4, direction: 'up' },
            { selector: '.hero-visual', delay: 0.6, direction: 'right' }
        ];

        heroElements.forEach(({ selector, delay, direction }) => {
            const element = document.querySelector(selector);
            if (element) {
                animateElement(element, {
                    initial: getInitialState(direction),
                    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
                    transition: { 
                        duration: animationConfig.duration, 
                        delay: delay,
                        ease: animationConfig.ease
                    }
                });
            }
        });

        // Chat bubbles staggered entrance
        const chatBubbles = document.querySelectorAll('.chat-bubble');
        chatBubbles.forEach((bubble, index) => {
            animateElement(bubble, {
                initial: { 
                    opacity: 0, 
                    scale: 0.8, 
                    x: index % 2 === 0 ? -30 : 30,
                    y: 20
                },
                animate: { opacity: 1, scale: 1, x: 0, y: 0 },
                transition: { 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.2),
                    ease: animationConfig.ease
                }
            });
        });

        // Audio controls entrance
        const audioControls = document.querySelector('.audio-controls');
        if (audioControls) {
            animateElement(audioControls, {
                initial: { opacity: 0, y: 30, scale: 0.9 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { 
                    duration: 0.6, 
                    delay: 2.2, 
                    ease: animationConfig.ease
                }
            });
        }
    };

    // Waveform animation loop
    const animateWaveform = () => {
        const waveBars = document.querySelectorAll('.wave-bar');
        waveBars.forEach((bar, index) => {
            animateElement(bar, {
                animate: { 
                    scaleY: [0.3, 1, 0.3],
                    opacity: [0.6, 1, 0.6]
                },
                transition: { 
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut"
                }
            });
        });
    };

    // Interactive hover animations
    const setupHoverAnimations = () => {
        // Buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                animateElement(button, {
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2, ease: "easeOut" }
                });
            });
            
            button.addEventListener('mouseleave', () => {
                animateElement(button, {
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.2, ease: "easeOut" }
                });
            });

            button.addEventListener('mousedown', () => {
                animateElement(button, {
                    scale: 0.95,
                    transition: { duration: 0.1, ease: "easeOut" }
                });
            });

            button.addEventListener('mouseup', () => {
                animateElement(button, {
                    scale: 1.05,
                    transition: { duration: 0.1, ease: "easeOut" }
                });
            });
        });

        // Cards
        const cards = document.querySelectorAll('.testimonial-card, .integration-card, .demo-card, .result-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                animateElement(card, {
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(30, 58, 138, 0.15)",
                    transition: { duration: 0.3, ease: "easeOut" }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                animateElement(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                });
            });
        });

        // Feature tabs
        const featureTabs = document.querySelectorAll('.feature-tab');
        featureTabs.forEach(tab => {
            tab.addEventListener('mouseenter', () => {
                animateElement(tab, {
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                });
            });
            
            tab.addEventListener('mouseleave', () => {
                animateElement(tab, {
                    scale: 1,
                    transition: { duration: 0.2, ease: "easeOut" }
                });
            });
        });
    };

    // Scroll-triggered animations
    const setupScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.dataset.animation || 'fadeUp';
                    
                    animateElement(element, {
                        initial: getInitialState(animationType),
                        animate: { opacity: 1, x: 0, y: 0, scale: 1 },
                        transition: { 
                            duration: animationConfig.duration, 
                            ease: animationConfig.ease
                        }
                    });
                    
                    scrollObserver.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements with animation attributes
        const animatedElements = document.querySelectorAll('[data-framer-motion]');
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    };

    // Metrics counter animation
    const animateCounters = () => {
        const metricNumbers = document.querySelectorAll('.metric-number');
        metricNumbers.forEach((number, index) => {
            const finalValue = number.textContent;
            const isNumeric = /^\d+/.test(finalValue);
            
            if (isNumeric) {
                const targetValue = parseInt(finalValue.replace(/\D/g, ''));
                let currentValue = 0;
                const increment = targetValue / 60; // 60 frames for smooth animation
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        number.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        number.textContent = Math.floor(currentValue) + finalValue.replace(/\d+/, '');
                    }
                }, 16); // ~60fps
            }
            
            animateElement(number, {
                initial: { scale: 0, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                }
            });
        });
    };

    // Logo carousel entrance
    const animateLogoCarousel = () => {
        const logoItems = document.querySelectorAll('.logo-item');
        logoItems.forEach((item, index) => {
            animateElement(item, {
                initial: { opacity: 0, x: -100, scale: 0.8 },
                animate: { opacity: 1, x: 0, scale: 1 },
                transition: { 
                    duration: 0.6, 
                    delay: index * 0.05,
                    ease: animationConfig.ease
                }
            });
        });
    };

    // Utility functions
    function getInitialState(direction) {
        const states = {
            up: { opacity: 0, y: 50, x: 0, scale: 1 },
            down: { opacity: 0, y: -50, x: 0, scale: 1 },
            left: { opacity: 0, x: -50, y: 0, scale: 1 },
            right: { opacity: 0, x: 50, y: 0, scale: 1 },
            fadeUp: { opacity: 0, y: 30, x: 0, scale: 1 },
            scale: { opacity: 0, y: 0, x: 0, scale: 0.8 }
        };
        return states[direction] || states.fadeUp;
    }

    function animateElement(element, config) {
        if (!element) return;
        
        // Apply initial state
        if (config.initial) {
            Object.assign(element.style, {
                opacity: config.initial.opacity || 1,
                transform: `translate3d(${config.initial.x || 0}px, ${config.initial.y || 0}px, 0) scale(${config.initial.scale || 1})`,
                transition: 'none'
            });
        }

        // Force reflow
        element.offsetHeight;

        // Apply animation
        requestAnimationFrame(() => {
            Object.assign(element.style, {
                opacity: config.animate.opacity || 1,
                transform: `translate3d(${config.animate.x || 0}px, ${config.animate.y || 0}px, 0) scale(${config.animate.scale || 1})`,
                transition: config.transition ? 
                    `all ${config.transition.duration || 0.6}s ${config.transition.ease ? 
                        (Array.isArray(config.transition.ease) ? 
                            `cubic-bezier(${config.transition.ease.join(',')})` : 
                            config.transition.ease) : 'ease-out'} ${config.transition.delay || 0}s` : 
                    'all 0.3s ease-out'
            });
        });
    }

    // Initialize all animations
    const init = () => {
        pageLoadSequence();
        animateWaveform();
        setupHoverAnimations();
        setupScrollAnimations();
        animateCounters();
        animateLogoCarousel();
    };

    // Start animations after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Console welcome message
console.log('%cTitle Voice Website', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #4a5568; font-size: 14px;');

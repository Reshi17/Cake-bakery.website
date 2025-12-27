 document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    
                    // Update active link
                    document.querySelectorAll('.nav-link').forEach(item => {
                        item.classList.remove('active');
                    });
                    link.classList.add('active');
                });
            });
            
            // Gallery Modal
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const closeModal = document.querySelector('.close-modal');
            
            document.querySelectorAll('.gallery-item img').forEach(img => {
                img.addEventListener('click', function() {
                    modal.style.display = 'flex';
                    modalImage.src = this.src;
                    modalImage.alt = this.alt;
                });
            });
            
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Form Submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                
                // In a real implementation, you would send this data to a server
                // For this example, we'll just show an alert
                alert(`Thank you, ${name}! Your inquiry has been received. We will contact you at ${email} within 24 hours.`);
                
                // Reset form
                contactForm.reset();
            });
            
            // Scroll Animation
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const checkFade = () => {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Check on load and scroll
            window.addEventListener('load', checkFade);
            window.addEventListener('scroll', checkFade);
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 100) {
                    header.style.padding = '0.7rem 0';
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
                } else {
                    header.style.padding = '1rem 0';
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                }
            });
            
            // Update active nav link on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', function() {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });
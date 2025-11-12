// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Modal Functions
function openForm(type) {
    const modal = document.getElementById('formModal');
    const formContainer = document.getElementById('formContainer');

    // Jotform URLs
    const forms = {
        'creation': 'https://form.jotform.com/253077192966569',
        'licence': 'https://form.jotform.com/252974835935574'
    };

    // Create iframe for Jotform
    const iframe = document.createElement('iframe');
    iframe.src = forms[type];
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    iframe.setAttribute('allow', 'geolocation; microphone; camera');
    iframe.setAttribute('scrolling', 'yes');

    // Clear previous content and add new iframe
    formContainer.innerHTML = '';
    formContainer.appendChild(iframe);

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Listen for form submission via postMessage
    window.addEventListener('message', function(e) {
        if (e.data && typeof e.data === 'string' && e.data.includes('form-submitted')) {
            // Form submitted - could add tracking here
            console.log('Form submitted successfully');
        }
    });
}

function closeForm() {
    const modal = document.getElementById('formModal');
    const formContainer = document.getElementById('formContainer');

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    formContainer.innerHTML = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target === modal) {
        closeForm();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeForm();
    }
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe service cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// WhatsApp button pulse animation
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.animation = 'none';
        setTimeout(() => {
            whatsappBtn.style.animation = 'pulse 2s infinite';
        }, 10);
    }, 5000);
}

// Note: Jotform will handle email sending to info@formalitys.com
// Make sure to configure this in your Jotform settings:
// 1. Go to each form in Jotform
// 2. Settings > Emails > Edit notification email
// 3. Change recipient to: info@formalitys.com
// 4. Payment integration with Stripe should be configured in Jotform settings as well

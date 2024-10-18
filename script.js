// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

// Dynamic Project Filter
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project').forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Interactive Typing Animation
const introText = "Roblox Scripter & Game Developer";
let introIndex = 0;
function type() {
    const introElement = document.getElementById('intro-text');
    if (introElement) {
        introElement.textContent = introText.slice(0, introIndex);
        introIndex++;
        if (introIndex <= introText.length) {
            setTimeout(type, 100); // Adjust speed by changing 100
        }
    }
}
type();

// Scroll Animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hidden-element');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            element.classList.add('animate-fadeIn');
        }
    });
});

// Project Cards with Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('flipped');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('flipped');
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function () {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Pop-up Contact Form
const contactButton = document.getElementById('contact-button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        const contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            contactModal.classList.toggle('hidden');
        }
    });
}

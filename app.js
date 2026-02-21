// TypeWriting effect
class TypeWriter {
    constructor(options, callback) {
        this.targetElement = options.targetElement;
        this.inputString = options.inputString;
        this.typing_interval = options.typing_interval || 130;
        this.blink_interval = options.blink_interval || '1s';
        this.cursor_color = options.cursor_color || '#ff7272';
        this.callback = callback;
        this.charIndex = 0;
        
        this.targetElement.innerHTML = '';
        this.targetElement.style.position = 'relative';
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        if (this.charIndex < this.inputString.length) {
            this.targetElement.textContent += this.inputString.charAt(this.charIndex);
            this.charIndex++;
            setTimeout(() => this.type(), this.typing_interval);
        } else {
            if (this.callback) {
                this.callback();
            }
        }
    }
}

// Typing animation for multiple roles
const roles = ['Digital Artist', 'Musician', 'Traditional Artist', 'Photographer', 'Cat Lover', 'Designer', 'Creator', 'Illustrator', 'Visual Storyteller'];
let currentRoleIndex = 0;

function typeNextRole() {
    const typingElement = document.querySelector('.typing-text');
    
    if (currentRoleIndex < roles.length) {
        new TypeWriter({
            targetElement: typingElement,
            inputString: roles[currentRoleIndex],
            typing_interval: 130,
            blink_interval: '1s',
            cursor_color: '#ff7272'
        }, function() {
            setTimeout(() => {
                typingElement.textContent = '';
                currentRoleIndex++;
                if (currentRoleIndex < roles.length) {
                    typeNextRole();
                } else {
                    currentRoleIndex = 0;
                    setTimeout(typeNextRole, 1000);
                }
            }, 1500);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Start typing animation
    setTimeout(typeNextRole, 500);

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
            }
            nav.classList.remove('active');
        });
    });

    document.body.classList.add("fade-in");

    // Add fade-out effect to all HTML page links
    document.querySelectorAll("a").forEach(link => {
        if (link.href && link.href.includes(".html")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const href = this.href;

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        }
    });
});

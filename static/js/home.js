// Atualizar ano no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Cursor personalizado
// const cursor = document.querySelector('.cursor');
// const cursorFollower = document.querySelector('.cursor-follower');

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';

//     setTimeout(() => {
//         cursorFollower.style.left = e.clientX + 'px';
//         cursorFollower.style.top = e.clientY + 'px';
//     }, 100);
// });

document.querySelectorAll('a, button, .project-card, .skill-card, .contact-method').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Fechar menu mobile se aberto
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Animação de scroll
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Animação de digitação corrigida
const typingText = document.querySelector('.typing-effect');
const text = "Desenvolvedor Web";
let index = 0;

// Clear the text content initially to avoid duplication on reload
typingText.textContent = "";

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    } else {
        // Manter o cursor piscando após a animação
        typingText.style.animation = "blink-fade 1s ease-in-out infinite";
    }
}

// Iniciar animação após um pequeno delay
setTimeout(typeWriter, 1000);

// Efeito de partículas
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00ffaa"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#0099ff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Easter Eggs
const easterEgg = document.querySelector('.easter-egg');
let eggCount = 0;

// Easter Egg 1: Clicar no logo 5 vezes
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    eggCount++;
    if (eggCount === 5) {
        showEasterEgg("Você é persistente! 🏆");
        eggCount = 0;
    }
});

// Easter Egg 2: Tecla secreta (A L E F)
const konamiCode = ['a', 'l', 'e', 'f'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            showEasterEgg("Código secreto desbloqueado! 🎮");
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function showEasterEgg(message) {
    easterEgg.textContent = message;
    easterEgg.classList.add('show');

    setTimeout(() => {
        easterEgg.classList.remove('show');
    }, 3000);
}

// Easter Egg 3: Rolagem até o final
let scrolledToBottom = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && !scrolledToBottom) {
        scrolledToBottom = true;
        showEasterEgg("Você chegou até o final! 👏");
    }
});
// Atualização Automática de Estatísticas
function updateStatistics() {
    // Ano de fundação/início da carreira
    const startYear = 2022; // Ajuste conforme necessário
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - startYear;
    
    // Contar parcerias (logos de clientes)
    const partnershipLogos = document.querySelectorAll('.client-logo').length;
    
    // Contar projetos (cards de projetos finalizados e em desenvolvimento)
    const projectsCount = document.querySelectorAll('.finished-project-card').length;
    
    // Atualizar os elementos HTML
    const yearsElement = document.getElementById('years-experience');
    const partnershipsElement = document.getElementById('partnerships-count');
    const projectsElement = document.getElementById('projects-count');
    
    if (yearsElement) {
        yearsElement.textContent = yearsExperience + '+';
        yearsElement.setAttribute('data-suffix', '+');
    }
    
    if (partnershipsElement) {
        partnershipsElement.textContent = partnershipLogos + '+';
        partnershipsElement.setAttribute('data-suffix', '+');
    }
    
    if (projectsElement) {
        projectsElement.textContent = projectsCount;
        projectsElement.setAttribute('data-suffix', '');
    }
}

// Executar quando a página carregar
window.addEventListener('DOMContentLoaded', updateStatistics);

// Menu Mobile Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Efeito de texto digitando
const typingText = document.querySelector('.typing-text');
const textArray = ['Desenvolvedor Full Stack', 'Criador de Sites', 'Desenvolvedor Web', 'Soluções Digitais'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pausar no fim do texto
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Iniciar efeito de digitação após um pequeno delay
setTimeout(typeEffect, 500);

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animação do hamburger
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Destacar link ativo na navegação
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animação das barras de habilidades
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Animação de fade-in nos elementos
const fadeElements = document.querySelectorAll('.project-card, .skill-category');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Formulário de contato - Comentado pois o formulário foi removido
/*
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obter os valores do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para uma API
        console.log('Dados do formulário:', formData);
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        
        // Limpar o formulário
        contactForm.reset();
        
        // Em produção, você pode substituir o alert por uma notificação mais elegante
        // e implementar o envio real do email através de um serviço backend
    });
}
*/

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de paralaxe suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Navbar transparente/sólida ao rolar
const navbar = document.querySelector('.navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    // Navbar
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    // Botão Scroll to Top
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Função de scroll suave para o topo
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contador animado para as estatísticas
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const suffix = element.getAttribute('data-suffix') || '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

// Observer para iniciar contadores quando visíveis
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat');
            const statElements = entry.target.querySelectorAll('.stat h3');
            
            statElements.forEach((stat, index) => {
                const targetText = stat.textContent;
                const match = targetText.match(/(\d+)(.+)/);
                
                if (match) {
                    const targetNumber = parseInt(match[1]);
                    const suffix = match[2];
                    const statCard = stats[index];
                    
                    // Salvar o sufixo como atributo
                    stat.setAttribute('data-suffix', suffix);
                    
                    // Iniciar contador com delay escalonado
                    setTimeout(() => {
                        stat.textContent = '0' + suffix;
                        statCard.classList.add('counting');
                        animateCounter(stat, targetNumber, 2000);
                        
                        // Remover classe após animação
                        setTimeout(() => {
                            statCard.classList.remove('counting');
                        }, 2000);
                    }, index * 200);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Adicionar classe ao hamburger quando ativo
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = hamburger.classList.contains('active') 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'none';
    spans[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = hamburger.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -6px)' 
        : 'none';
});

// Atualizar ano no footer dinamicamente
function updateFooterYear() {
    const creationYear = 2025;
    const currentYear = new Date().getFullYear();
    const footerYearElement = document.getElementById('footer-year');
    
    if (footerYearElement) {
        if (currentYear === creationYear) {
            footerYearElement.textContent = currentYear;
        } else {
            footerYearElement.textContent = `${creationYear} - ${currentYear}`;
        }
    }
}

// Executar ao carregar a página
updateFooterYear();

// Scrollspy - Indicador de seção ativa
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Animação das barras de habilidades
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 200);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSectionElement = document.querySelector('.skills-section');
if (skillsSectionElement) {
    skillsObserver.observe(skillsSectionElement);
}

// Carrossel de Depoimentos
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-play do carrossel (opcional)
let autoplayInterval = setInterval(nextTestimonial, 5000);

// Pausar autoplay ao hover
const testimonialWrapper = document.querySelector('.testimonials-wrapper');
if (testimonialWrapper) {
    testimonialWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    testimonialWrapper.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextTestimonial, 5000);
    });
}

// Sistema de Filtros e Paginação de Projetos
const projectsPerPage = 6;
let currentProjectPage = 1;
let currentFilter = 'all';

const allProjectCards = document.querySelectorAll('.finished-project-card');
const filterButtons = document.querySelectorAll('.filter-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');

function getFilteredProjects() {
    if (currentFilter === 'all') {
        return Array.from(allProjectCards);
    }
    return Array.from(allProjectCards).filter(card => 
        card.getAttribute('data-category') === currentFilter
    );
}

function updateProjectDisplay() {
    const filteredProjects = getFilteredProjects();
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    
    // Atualizar informações de paginação
    totalPagesSpan.textContent = totalPages;
    currentPageSpan.textContent = currentProjectPage;
    
    // Habilitar/desabilitar botões de navegação
    prevPageBtn.disabled = currentProjectPage === 1;
    nextPageBtn.disabled = currentProjectPage === totalPages || totalPages === 0;
    
    // Ocultar todos os cards primeiro
    allProjectCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Mostrar apenas os cards da página atual e categoria selecionada
    const startIndex = (currentProjectPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    
    filteredProjects.slice(startIndex, endIndex).forEach(card => {
        card.style.display = 'block';
    });
    
    // Se não houver projetos, resetar para página 1
    if (filteredProjects.length === 0) {
        currentPageSpan.textContent = 0;
    }
}

// Event listeners para filtros
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado
        button.classList.add('active');
        
        // Atualizar filtro atual
        currentFilter = button.getAttribute('data-category');
        
        // Resetar para primeira página
        currentProjectPage = 1;
        
        // Atualizar display
        updateProjectDisplay();
    });
});

// Event listeners para paginação
prevPageBtn.addEventListener('click', () => {
    if (currentProjectPage > 1) {
        currentProjectPage--;
        updateProjectDisplay();
        
        // Scroll suave para o topo da seção
        document.getElementById('finished-projects').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
});

nextPageBtn.addEventListener('click', () => {
    const filteredProjects = getFilteredProjects();
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    
    if (currentProjectPage < totalPages) {
        currentProjectPage++;
        updateProjectDisplay();
        
        // Scroll suave para o topo da seção
        document.getElementById('finished-projects').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
});

// Inicializar display de projetos
updateProjectDisplay();


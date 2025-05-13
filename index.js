const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('i');

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
  document.body.classList.replace('light-mode', 'dark-mode');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

function toggleTheme() {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.replace('light-mode', 'dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavLink);

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS. Features a modern design, project showcase, and contact form.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'A weather application that provides real-time weather information based on user location or search. Uses the OpenWeatherMap API.',
    tags: ['JavaScript', 'API', 'CSS'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'A task management application with features like task creation, assignment, status updates, and deadline notifications.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'A real-time chat application with features like private messaging, group chats, and file sharing.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/7988113/pexels-photo-7988113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A blog platform with features like post creation, commenting, user profiles, and content management.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com'
  }
];

const skills = [
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'TypeScript', icon: 'fa-solid fa-code' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  { name: 'HTML/CSS', icon: 'fa-brands fa-html5' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'MongoDB', icon: 'fa-solid fa-database' },
  { name: 'SQL', icon: 'fa-solid fa-table' },
  { name: 'Docker', icon: 'fa-brands fa-docker' },
  { name: 'AWS', icon: 'fa-brands fa-aws' },
  { name: 'Redux', icon: 'fa-solid fa-repeat' },
  { name: 'GraphQL', icon: 'fa-solid fa-diagram-project' }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'fa-brands fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'fa-brands fa-twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'fa-solid fa-envelope' }
];

const projectGrid = document.getElementById('project-grid');
const showMoreBtn = document.getElementById('show-more-btn');
const showLessBtn = document.getElementById('show-less-btn');
let initialProjectCount = 3;

function renderProjects(count = projects.length) {
  projectGrid.innerHTML = '';
  const visibleProjects = projects.slice(0, count);
  
  visibleProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.imageUrl}" alt="${project.title}">
        <div class="project-overlay">
          <div class="project-links">
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" aria-label="View demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" aria-label="View source code"><i class="fab fa-github"></i></a>` : ''}
          </div>
        </div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    `;
    
    projectGrid.appendChild(projectCard);
  });
  
  if (count < projects.length) {
    showMoreBtn.style.display = 'inline-block';
    showLessBtn.style.display = 'none';
  } else if (projects.length > initialProjectCount) {
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
  } else {
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'none';
  }
}

showMoreBtn.addEventListener('click', () => renderProjects());
showLessBtn.addEventListener('click', () => renderProjects(initialProjectCount));

const skillsGrid = document.getElementById('skills-grid');

function renderSkills() {
  skillsGrid.innerHTML = '';
  
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    
    skillCard.innerHTML = `
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
    `;
    
    skillsGrid.appendChild(skillCard);
  });
}

const socialLinksContainer = document.getElementById('social-links');
const footerSocial = document.getElementById('footer-social');

function renderSocialLinks() {
  socialLinksContainer.innerHTML = '';
  footerSocial.innerHTML = '';
  
  socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.className = 'social-link';
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.rel = 'noopener noreferrer';
    
    socialLink.innerHTML = `
      <i class="${link.icon}"></i>
      <span>${link.name}</span>
    `;
    
    socialLinksContainer.appendChild(socialLink);
    
    const footerLink = document.createElement('a');
    footerLink.href = link.url;
    footerLink.target = '_blank';
    footerLink.rel = 'noopener noreferrer';
    footerLink.setAttribute('aria-label', link.name);
    
    footerLink.innerHTML = `<i class="${link.icon}"></i>`;
    
    footerSocial.appendChild(footerLink);
  });
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  console.log('Form submission:', { name, email, subject, message });
  
  alert('Message sent successfully!');
  contactForm.reset();
});

document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(initialProjectCount);
  renderSkills();
  renderSocialLinks();
  highlightNavLink();
});

function revealOnScroll() {
  const elements = document.querySelectorAll('.project-card, .skill-card, .about-image, .about-text');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
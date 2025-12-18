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

const projects = [
  {
    id: 'letterbesd',
    title: 'LetterBESd',
    description: 'Sistema ML recomendação filmes: Flask + React + PostgreSQL Docker',
    tags: ['Python/Flask', 'React', 'Docker', 'ML Ratings'],
    githubUrl: 'https://github.com/antonioacampos/letterbesd'
  },
  {
    id: 'usp-ci',
    title: 'USPdev/ci',
    description: 'Comunicação Interna USP: documentos, templates PDF, Senha Única',
    tags: ['PHP 8.2', 'Laravel 11', 'Replicado USP', 'MPM-ITK'],
    githubUrl: 'https://github.com/uspdev/ci'
  },
  {
    id: 'usp-workflows',
    title: 'USPdev/workflows',
    description: 'BPMN Engine: Symfony Workflow + Laravel 11 + forms dinâmicos',
    tags: ['Laravel Package', 'Symfony Workflow', 'BPMN', 'Activitylog'],
    githubUrl: 'https://github.com/uspdev/workflows'
  },
  {
    id: 'usp-equivalencia',
    title: 'USPdev/equivalencia',
    description: 'Equivalência acadêmica USP: workflows + forms',
    tags: ['Senha Única', 'PostgreSQL', 'Workflows', 'Forms'],
    githubUrl: 'https://github.com/uspdev/equivalencia'
  },
  {
    id: 'usp-forms',
    title: 'USPdev/forms',
    description: 'Form Builder JSON→HTML: pessoa-usp, disciplina-usp, file upload',
    tags: ['Laravel Package', 'Replicado USP', 'CRUD Admin', 'Bootstrap 5'],
    githubUrl: 'https://github.com/uspdev/forms'
  },
  {
    id: 'caronaapi',
    title: 'CaronaAPI',
    description: 'API caronas universitárias: matching RT + geolocalização + Railway',
    tags: ['Laravel 11', 'Sanctum', 'Redis', 'Railway'],
    githubUrl: 'https://github.com/antonioacampos/caronaAPI'
  }
];

const skills = [
  { name: 'PHP 8.3', icon: 'fa-brands fa-php' },
  { name: 'Laravel 11', icon: 'fa-solid fa-leaf' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'TypeScript', icon: 'fa-solid fa-code' },
  { name: 'Java', icon: 'fa-brands fa-java' },
  { name: 'Spring Boot', icon: 'fa-solid fa-bootstrap' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'Docker', icon: 'fa-brands fa-docker' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
  { name: 'Redis', icon: 'fa-solid fa-fire' },
  { name: 'GitHub Actions', icon: 'fa-brands fa-github' },
  { name: 'Railway', icon: 'fa-solid fa-rocket' },
  { name: 'Apache', icon: 'fa-solid fa-server' },
  { name: 'Nginx', icon: 'fa-solid fa-globe' },
  { name: 'MPM-ITK', icon: 'fa-solid fa-shield-alt' }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/antonioacampos', icon: 'fa-brands fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/antonioacampos', icon: 'fa-brands fa-linkedin' },
  { name: 'Email', url: 'mailto:antoniocampos_a@outlook.com', icon: 'fa-solid fa-envelope' },
  { name: 'IFSP SCL', url: 'https://portais.ifsp.edu.br/scl/index.php/cursos.html?id=1762:bacharelado-em-engenharia-de-software&catid=61', icon: 'fa-solid fa-graduation-cap' }
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
      <div class="project-info">
        <h3 class="project-title">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">${project.title}</a>
        </h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <a href="${project.githubUrl}" target="_blank" class="project-link" rel="noopener noreferrer">
          <i class="fab fa-github"></i> Ver no GitHub
        </a>
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
function renderSocialLinks() {
  socialLinksContainer.innerHTML = '';
  socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.className = 'social-link';
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.rel = 'noopener noreferrer';
    socialLink.innerHTML = `
      <i class="${link.icon}"></i> ${link.name}
    `;
    socialLinksContainer.appendChild(socialLink);
  });
}

document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(initialProjectCount);
  renderSkills();
  renderSocialLinks();
  highlightNavLink();
});

function revealOnScroll() {
  const elements = document.querySelectorAll('.project-card, .skill-card, .about-text, .experience-item');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', highlightNavLink);

// ===== PROJECT DATA =====
const projectData = {
  lexora: {
    title: 'Lexora — Online Legal Consultation Platform',
    category: 'Full-Stack Development',
    year: '2026',
    status: 'Completed',
    image: 'sasun-bughdaryan-e11Oa3kvx4c-unsplash.jpg',
    description: `Lexora is a role-based legal consultation platform connecting clients with legal professionals, enabling service discovery, consultation booking, and legal document requests through a unified web application.`,
    longDescription: `
      <p><strong>Lexora</strong> is a comprehensive legal tech platform designed to bridge the gap between clients and legal professionals. The platform streamlines the process of finding legal services, booking consultations, and generating legal documents.</p>
      <h4 style="margin: 20px 0 10px;">Key Features:</h4>
      <ul style="line-height: 1.8; padding-left: 20px;">
        <li>JWT authentication and role-based access control for Clients, Lawyers, and Admins</li>
        <li>Protected dashboards with admin verification for secure platform access</li>
        <li>RESTful backend modules for services, bookings, document generation, and administration</li>
        <li>PostgreSQL integration for persistent data management</li>
        <li>Axios-based API communication with React frontend</li>
        <li>Service discovery and consultation booking system</li>
        <li>Legal document request and generation workflow</li>
      </ul>
      <h4 style="margin: 20px 0 10px;">Technical Implementation:</h4>
      <p>The platform uses React.js with Tailwind CSS for the frontend, Node.js and Express.js for the backend, and PostgreSQL with NeonDB for database management. JWT ensures secure authentication, and Axios handles API communication.</p>
    `,
    tech: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'NeonDB',
      'JWT',
      'Axios',
      'Vite',
    ],
    github: 'https://github.com/anchalj7/Lexora',
    demo: 'https://lexora-xi-liart.vercel.app/',
    stats: {
      Users: '500+',
      Lawyers: '100+',
      Bookings: '1,000+',
      Rating: '4.8',
    },
  },

  charityloom: {
    title: 'CharityLoom — Online Donation Platform',
    category: 'Web Development',
    year: '2024',
    status: 'Completed',
    image: 'larm-rmah-AEaTUnvneik-unsplash.jpg',
    description: `CharityLoom is a centralized platform for managing charitable donations, NGO requests, and interactions between donors and organizations.`,
    longDescription: `
      <p><strong>CharityLoom</strong> addresses the need for a centralized platform to manage charitable donations, NGO requests, and interactions between donors and organizations.</p>
      <h4 style="margin: 20px 0 10px;">Key Features:</h4>
      <ul style="line-height: 1.8; padding-left: 20px;">
        <li>Donation management system</li>
        <li>NGO registration and management</li>
        <li>User registration and authentication</li>
        <li>Donation requests and enquiries</li>
        <li>Administrative approval workflows</li>
        <li>Separate user, NGO, and admin workflows</li>
        <li>Database-driven CRUD operations</li>
      </ul>
      <h4 style="margin: 20px 0 10px;">Technical Implementation:</h4>
      <p>The platform was built using PHP for backend processing with MySQL for data storage. Bootstrap was used for responsive design, with HTML, CSS, and JavaScript for the frontend.</p>
    `,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    github: 'https://github.com/anchalj7/charityloom',
    demo: '#',
    stats: {
      Donors: '1,000+',
      NGOs: '50+',
      Donations: '2,500+',
      Rating: '4.7',
    },
  },

  disaster: {
    title: 'Disaster Relief Coordination Platform',
    category: 'Full-Stack Development',
    year: '2026',
    status: 'Completed',
    image: 'chris-gallagher-4zxp5vlmvnI-unsplash.jpg',
    description: `A real-time disaster management system enabling emergency reporting, volunteer coordination, resource allocation, and live communication.`,
    longDescription: `
      <p><strong>Disaster Relief Coordination Platform</strong> addresses delayed emergency communication, poor coordination among citizens, volunteers, and relief agencies, and inefficient resource allocation through a centralized web-based platform.</p>
      <h4 style="margin: 20px 0 10px;">Key Features:</h4>
      <ul style="line-height: 1.8; padding-left: 20px;">
        <li>Emergency reporting system</li>
        <li>Volunteer assignment and coordination</li>
        <li>Resource management and allocation</li>
        <li>Live interactive mapping</li>
        <li>Real-time chat and notifications</li>
        <li>Role-based access control</li>
      </ul>
      <h4 style="margin: 20px 0 10px;">Performance Metrics:</h4>
      <ul style="line-height: 1.8; padding-left: 20px;">
        <li>Average API response time: <strong>under 500 ms</strong></li>
        <li>Real-time message delivery: <strong>under 100 ms</strong></li>
        <li>Successfully tested with <strong>1,000+ simulated connections</strong></li>
      </ul>
      <h4 style="margin: 20px 0 10px;">Technical Implementation:</h4>
      <p>The platform uses React.js with TypeScript and Tailwind CSS for the frontend. Node.js and Express.js power the backend with PostgreSQL and Prisma for database management. Socket.io enables real-time communication, and JWT ensures secure authentication.</p>
    `,
    tech: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Socket.io',
      'JWT',
      'Tailwind CSS',
    ],
    github: 'https://github.com/anchalj7/disaster-relief',
    demo: 'https://disaster--relief.vercel.app/',
    stats: {
      Volunteers: '1,000+',
      Emergencies: '500+',
      Resources: '100+',
      Rating: '4.9',
    },
  },
};

// ===== THEME TOGGLE (light / dark) =====
const themeToggle = document.getElementById('themeToggle');
const rootEl = document.documentElement;
const THEME_KEY = 'aj-portfolio-theme';

function applyTheme(theme) {
  rootEl.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.innerHTML =
      theme === 'dark'
        ? "<i class='bx bx-sun'></i>"
        : "<i class='bx bx-moon'></i>";
  }
  localStorage.setItem(THEME_KEY, theme);
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next =
      rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');
if (navToggle && navbar) {
  navToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== TYPED ROLE TEXT =====
const roles = ['Full-Stack Developer', 'UI/UX Designer'];
const typedEl = document.getElementById('typedRole');

function typeLoop() {
  if (!typedEl) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}
typeLoop();

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => revealObserver.observe(el));

// ===== SKILLS ANIMATION (bars + radials trigger once in view) =====
document.querySelectorAll('.progress-line').forEach((line) => {
  const val = line.getAttribute('data-value') || '0';
  line.style.setProperty('--w', val + '%');
});

const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll('.progress-line')
            .forEach((l) => l.classList.add('animate'));
          document
            .querySelectorAll('.radial-bars')
            .forEach((r) => r.classList.add('animate'));
          skillsObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  skillsObserver.observe(skillsSection);
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = Array.from(navLinks)
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `.nav-link[data-section="${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
);
sections.forEach((section) => navObserver.observe(section));

// ===== OPEN PROJECT DETAIL =====
document.querySelectorAll('.project-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    openProjectModal(this.getAttribute('data-project'));
  });
});

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');

  const techHTML = project.tech.map((t) => `<span>${t}</span>`).join('');
  const statsHTML = Object.keys(project.stats)
    .map(
      (key) => `
      <div class="stat-item">
        <div class="stat-number">${project.stats[key]}</div>
        <div class="stat-label">${key}</div>
      </div>`,
    )
    .join('');

  const isRealLink = (url) => !!url && url.trim() !== '#';

  const githubHTML = isRealLink(project.github)
    ? `<a href="${project.github}" target="_blank" rel="noopener"><i class="bx bxl-github"></i> View on GitHub</a>`
    : `<span class="modal-link-disabled"><i class="bx bxl-github"></i> Repo coming soon</span>`;

  const demoHTML = isRealLink(project.demo)
    ? `<a href="${project.demo}" target="_blank" rel="noopener"><i class="bx bx-link-external"></i> Live Demo</a>`
    : `<span class="modal-link-disabled"><i class="bx bx-link-external"></i> Demo coming soon</span>`;

  body.innerHTML = `
    <h2>${project.title}</h2>
    <div class="project-meta">
      <span>${project.category}</span>
      <span>${project.year}</span>
      <span>${project.status === 'Completed' ? '✓ Completed' : '● In Progress'}</span>
    </div>
    <img src="${project.image}" alt="${project.title}" class="modal-image" onerror="this.src='https://via.placeholder.com/800x400/0E1B2E/5EEAD4?text=${encodeURIComponent(project.title)}'" />
    <div class="modal-description">
      <p>${project.description}</p>
      ${project.longDescription}
    </div>
    <h4>Technologies Used</h4>
    <div class="tech-stack">${techHTML}</div>
    <h4 style="margin-top: 24px;">Project Stats</h4>
    <div class="modal-stats">${statsHTML}</div>
    <div class="modal-links">
      ${githubHTML}
      ${demoHTML}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

const closeBtn = document.querySelector('.close-modal');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

const modalEl = document.getElementById('project-modal');
if (modalEl) {
  modalEl.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

// ===== READ MORE =====
document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const aboutFull = document.querySelector('.about-full');
  const aboutShort = document.querySelector('.about-short');

  if (readMoreBtn && aboutFull && aboutShort) {
    let isExpanded = false;
    readMoreBtn.addEventListener('click', function () {
      isExpanded = !isExpanded;
      if (isExpanded) {
        aboutFull.style.display = 'block';
        aboutShort.style.display = 'none';
        this.innerHTML = 'Read Less <i class="bx bx-chevron-up"></i>';
        this.classList.add('active');
      } else {
        aboutFull.style.display = 'none';
        aboutShort.style.display = 'block';
        this.innerHTML = 'Read More <i class="bx bx-chevron-down"></i>';
        this.classList.remove('active');
      }
    });
  }
});

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const sendBtn = document.getElementById('sendBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const original = sendBtn.innerHTML;
    sendBtn.innerHTML = 'Sending...';
    sendBtn.disabled = true;

    setTimeout(() => {
      formNote.textContent =
        'Message ready — connect a form service (e.g. EmailJS or Formspree) to actually deliver it.';
      sendBtn.innerHTML = original;
      sendBtn.disabled = false;
      contactForm.reset();
    }, 900);
  });
}

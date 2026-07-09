// Typed.js for typing animation
var typed = new Typed('.text', {
  strings: ['Frontend Developer', 'Web Developer', 'React Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// Contact form validation and submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (!name || !email || !message) {
    alert('Please fill in all required fields (Name, Email, and Message).');
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Success message
  alert(
    'Thank you, ' +
      name +
      '! Your message has been sent successfully. Anchal will get back to you soon.',
  );

  // Reset form
  this.reset();
});

// Active navigation link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', function () {
  let current = '';
  const headerHeight = document.querySelector('.header').offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.style.color = '#fff';
    link.style.fontWeight = '500';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#392204';
      link.style.fontWeight = '700';
    }
  });
});

// Add animation on scroll for skill bars (re-trigger if needed)
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressLines = entry.target.querySelectorAll('.progress-line');
      progressLines.forEach((line) => {
        line.style.animation = 'none';
        line.offsetHeight; // trigger reflow
        line.style.animation = 'animate 1s cubic-bezier(1,0,0.5,1) forwards';
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.container1').forEach((container) => {
  observer.observe(container);
});

// Portfolio row hover effect
document.querySelectorAll('.row').forEach((row) => {
  row.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
  });

  row.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)';
  });
});

console.log('Portfolio website loaded successfully!');

// ===== PROJECT DATA =====
const projectData = {
  charityloom: {
    title: 'CharityLoom - Donation Platform',
    category: 'Web Development',
    year: '2024',
    status: 'Completed',
    image: 'charityloom.jpg',
    description: `CharityLoom is a comprehensive donation platform designed to bridge the gap between donors and NGOs. The platform facilitates the donation of food, clothes, wheelchairs, and other essential supplies to those in need.`,
    longDescription: `
      <p><strong>CharityLoom</strong> is a full-featured donation management system that connects donors with verified NGOs and charitable organizations.</p>
      
      <h4 style="color: #fff; margin: 20px 0 10px;">Key Features:</h4>
      <ul style="color: #f0ece8; line-height: 1.8; padding-left: 20px;">
        <li>User registration and authentication system</li>
        <li>Donation posting and tracking with real-time updates</li>
        <li>NGO dashboard for managing donation requests</li>
        <li>Secure payment integration</li>
        <li>Mobile-responsive design</li>
      </ul>
    `,
    tech: [
      'PHP',
      'MySQL',
      'Bootstrap 5',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
    ],
    github: 'https://github.com/anchalj7/charityloom',
    demo: 'https://charityloom.example.com',
    stats: {
      Users: '500+',
      Donations: '1,200+',
      NGOs: '50+',
      Rating: '4.8',
    },
  },

  disaster: {
    title: 'Disaster Relief Coordination Platform',
    category: 'Full-Stack Development',
    year: '2024',
    status: 'In Progress',
    image: 'disaster-platform.jpg',
    description: `A full-stack disaster management platform enabling volunteer coordination, emergency reporting, resource allocation, and real-time communication.`,
    longDescription: `
      <p><strong>Disaster Relief Platform</strong> is a comprehensive solution for managing disaster response efforts.</p>
      
      <h4 style="color: #fff; margin: 20px 0 10px;">Key Features:</h4>
      <ul style="color: #f0ece8; line-height: 1.8; padding-left: 20px;">
        <li>Volunteer registration and coordination</li>
        <li>Emergency reporting with location tracking</li>
        <li>Resource allocation and inventory management</li>
        <li>Real-time communication via WebSocket</li>
        <li>Interactive maps for affected areas</li>
      </ul>
    `,
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Socket.io',
      'Leaflet.js',
    ],
    github: 'https://github.com/HarsikaKumari/disaster_relief/tree/aanchal',
    demo: 'https://disaster--relief.vercel.app',
    stats: {
      Volunteers: '1,000+',
      Emergencies: '300+',
      Resources: '50+',
      Rating: '4.9',
    },
  },

  'coal-mining': {
    title: 'Real-Time Safety Monitoring System',
    category: 'IoT & AI Development',
    year: '2024',
    status: 'Completed',
    image: 'coal-mining.jpg',
    description: `An AI-powered coal mining safety system with IoT sensors, RFID, OTP authentication, real-time alerts, and role-based access control.`,
    longDescription: `
      <p><strong>Safety Monitoring System</strong> is an innovative solution designed to enhance safety in coal mining operations.</p>
      
      <h4 style="color: #fff; margin: 20px 0 10px;">Key Features:</h4>
      <ul style="color: #f0ece8; line-height: 1.8; padding-left: 20px;">
        <li>IoT sensor network for environmental monitoring</li>
        <li>RFID-based worker tracking and identification</li>
        <li>OTP authentication for secure access</li>
        <li>Real-time safety alerts and notifications</li>
        <li>Role-based access control system</li>
      </ul>
    `,
    tech: [
      'Python',
      'IoT',
      'RFID',
      'React',
      'Node.js',
      'MongoDB',
      'MQTT',
      'TensorFlow',
    ],
    github: 'https://github.com/yourusername/safety-monitoring',
    demo: 'https://safety-monitoring.example.com',
    stats: {
      Sensors: '500+',
      Workers: '200+',
      Alerts: '50+',
      Rating: '4.7',
    },
  },
};

// ===== OPEN PROJECT DETAIL =====
document.querySelectorAll('.project-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const projectId = this.getAttribute('data-project');
    openProjectModal(projectId);
  });
});

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) {
    alert('Project not found!');
    return;
  }

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body');

  // Build tech stack HTML
  const techHTML = project.tech.map((tech) => `<span>${tech}</span>`).join('');

  // Build stats HTML
  const statsHTML = Object.keys(project.stats)
    .map(
      (key) => `
    <div class="stat-item">
      <div class="stat-number">${project.stats[key]}</div>
      <div class="stat-label">${key}</div>
    </div>
  `,
    )
    .join('');

  // Build modal content
  body.innerHTML = `
    <h2>${project.title}</h2>
    <div class="project-meta">
      <span>📁 ${project.category}</span>
      <span>📅 ${project.year}</span>
      <span>${project.status === 'Completed' ? '✅ Completed' : '🔄 In Progress'}</span>
    </div>
    
    <img src="${project.image}" alt="${project.title}" class="modal-image" />
    
    <div class="modal-description">
      <p>${project.description}</p>
      ${project.longDescription}
    </div>
    
    <h4 style="color: #fff; margin: 20px 0 10px;">🛠️ Technologies Used</h4>
    <div class="tech-stack">
      ${techHTML}
    </div>
    
    <h4 style="color: #fff; margin: 20px 0 10px;">📊 Project Stats</h4>
    <div class="modal-stats">
      ${statsHTML}
    </div>
    
    <div class="modal-links">
      <a href="${project.github}" target="_blank">
        <i class="bx bxl-github"></i> View on GitHub
      </a>
      <a href="${project.demo}" target="_blank">
        <i class="bx bx-link-external"></i> Live Demo
      </a>
    </div>
  `;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
document.querySelector('.close-modal').addEventListener('click', function () {
  closeModal();
});

// Close on clicking outside
document
  .getElementById('project-modal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

// Close on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ===== READ MORE / READ LESS FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const aboutFull = document.querySelector('.about-full');
  const aboutShort = document.querySelector('.about-short');

  let isExpanded = false;

  readMoreBtn.addEventListener('click', function () {
    isExpanded = !isExpanded;

    if (isExpanded) {
      // Show full content
      aboutFull.style.display = 'block';
      aboutShort.style.display = 'none';
      this.innerHTML = 'Read Less <i class="bx bx-chevron-up"></i>';
      this.classList.add('active');

      // Scroll to see the content
      setTimeout(() => {
        this.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      // Hide full content
      aboutFull.style.display = 'none';
      aboutShort.style.display = 'block';
      this.innerHTML = 'Read More <i class="bx bx-chevron-down"></i>';
      this.classList.remove('active');
    }
  });
});

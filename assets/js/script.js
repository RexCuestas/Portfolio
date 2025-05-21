
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.maxHeight;
  
     
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.maxHeight = null;
      });
  
     
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');
const modalImage = document.getElementById('modal-image');

const projectData = {
  portfolio: {
    title: "Portfolio Website",
    description: "A personal portfolio site showcasing my profile, projects, and skills using HTML, CSS, and JavaScript.",
    image: "assets/images/portfolio-frontpage.png" 
  },
  todo: {
    title: "Todo App",
    description: "A simple todo list app built with JavaScript and local storage to save tasks.",
    image: "assets/images/todo-app.png"
  },
  calendar: {
  title: "Calendar App",
  description: "A simple calendar that shows upcoming holidays with visuals.",
  image: "assets/images/calendar-img.png"
  },
};

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.dataset.project;
    const data = projectData[projectKey];

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalImage.src = data.image;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  }
});
const demoLink = document.getElementById("demo-link");

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.dataset.project;
    const data = projectData[projectKey];

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalImage.src = data.image;
    demoLink.href = data.demo;
    modal.style.display = "block";
  });
});

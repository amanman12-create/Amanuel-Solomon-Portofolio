// Featured projects data
const projects = [
  {
    name: "Project 1 Title – Your Best Work",
    stack: "React, Node.js, PostgreSQL",
    link: "#",
    linkLabel: "View Repo / Live Demo",
    focus: "Full‑stack web application",
  },
  {
    name: "Project 2 Title",
    stack: "Python, Django, AWS S3",
    link: "#",
    linkLabel: "View Repo / Demo",
    focus: "Backend API & cloud services",
  },
  {
    name: "Project 3 Title",
    stack: "TensorFlow, Pandas, Jupyter",
    link: "#",
    linkLabel: "View Repo / Notebook",
    focus: "Machine learning / data science",
  },
  {
    name: "Add more rows for your top projects",
    stack: "Customize this list in script.js",
    link: "#",
    linkLabel: "Update with your link",
    focus: "Portfolio highlight",
  },
];

function renderProjects() {
  const tbody = document.getElementById("projects-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  projects.forEach((project) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = project.name;

    const stackTd = document.createElement("td");
    stackTd.textContent = project.stack;

    const linkTd = document.createElement("td");
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = project.linkLabel;
    linkTd.appendChild(link);

    const focusTd = document.createElement("td");
    focusTd.textContent = project.focus;

    tr.appendChild(nameTd);
    tr.appendChild(stackTd);
    tr.appendChild(linkTd);
    tr.appendChild(focusTd);
    tbody.appendChild(tr);
  });
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

function initYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear().toString();
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thanks for your message! This is a demo form.\n\nConnect this to EmailJS, a serverless function, or your backend to receive real messages."
    );
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNavToggle();
  initYear();
  initContactForm();
});



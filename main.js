// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

function truncateText(text) {
  console.log("truncate text", text);
  return text?.length > 60 ? text.slice(0, 60) + "..." : text;
}
// Projects Section
const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${truncateText(project.description)}</p>
            <div class="tech-tags">
                ${project.tech
                  .map(
                    (tech) => `
                    <span class="tech-tag">
                        <i class="fas fa-code"></i>
                        ${tech}
                    </span>
                `
                  )
                  .join("")}
            </div>
            <button class="contactButton cursor-hand" type="button" id="cta-button" onclick="openLink('${project.site}')"> View
  <div class="iconButton">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
        </div>
    `;
  projectsGrid.appendChild(projectCard);
});

function openLink(url) {
    console.log('url',url);
    
    window.open(url, '_blank'); // Opens the link in a new tab
}
// Team Section
const teamGrid = document.getElementById("teamGrid");

team.forEach((member) => {
  const teamCard = document.createElement("div");
  teamCard.className = "team-card";
  teamCard.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <div class="team-content">
            <h3>${member.name}</h3>
            <p class="role">${member.role}</p>
            <p>${member.bio}</p>
            <div class="social-links">
                <a href="${member.github}"  target="_blank"><i class="fab fa-github"></i></a>
                <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    `;
  teamGrid.appendChild(teamCard);
});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would typically handle the form submission
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Back to Top
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Update Copyright Year
document.getElementById("currentYear").textContent = new Date().getFullYear();

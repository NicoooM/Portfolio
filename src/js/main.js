const landingTextProjects = document.querySelectorAll("#landing-text-projet");
const landingNumProjects = document.querySelectorAll("#projet-link");

for (let i = 0; i < landingTextProjects.length; i++) {
  landingNumProjects[i].addEventListener("mouseenter", () => {
    landingTextProjects[i].classList.add("active");
  });
  landingNumProjects[i].addEventListener("mouseleave", () => {
    landingTextProjects[i].classList.remove("active");
  });
}

const body = document.querySelector(".container");
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
// side-nav
const anchorHeader = document.querySelector("#anchor-header");
const anchorProjets = document.querySelector("#anchor-projets");
const anchorAPropos = document.querySelector("#anchor-a-propos");
const anchorContact = document.querySelector("#anchor-contact");

body.addEventListener("mouseover", (e) => {
  if (e.pageY < vh) {
    anchorHeader.classList.add("active");
    anchorProjets.classList.remove("active");
    anchorAPropos.classList.remove("active");
    anchorContact.classList.remove("active");
  }
  if (e.pageY < vh * 2 && e.pageY > vh) {
    anchorProjets.classList.add("active");
    anchorHeader.classList.remove("active");
    anchorAPropos.classList.remove("active");
    anchorContact.classList.remove("active");
  }
  if (e.pageY < vh * 3 && e.pageY > vh * 2) {
    anchorAPropos.classList.add("active");
    anchorProjets.classList.remove("active");
    anchorContact.classList.remove("active");
    anchorHeader.classList.remove("active");
  }
  if (e.pageY < vh * 4 && e.pageY > vh * 3) {
    anchorContact.classList.add("active");
    anchorHeader.classList.remove("active");
    anchorAPropos.classList.remove("active");
    anchorProjets.classList.remove("active");
  }
});

const landingTextProject1 = document.querySelector("#landing-text-projet-1");
const landingTextProject2 = document.querySelector("#landing-text-projet-2");
const landingTextProject3 = document.querySelector("#landing-text-projet-3");
const landingTextProject4 = document.querySelector("#landing-text-projet-4");

const landingNumProject1 = document.querySelector(".projet-1-link");
const landingNumProject2 = document.querySelector(".projet-2-link");
const landingNumProject3 = document.querySelector(".projet-3-link");
const landingNumProject4 = document.querySelector(".projet-4-link");

landingNumProject1.addEventListener("mouseenter", () => {
  landingTextProject1.classList.add("active");
});
landingNumProject1.addEventListener("mouseleave", () => {
  landingTextProject1.classList.remove("active");
});

landingNumProject2.addEventListener("mouseenter", () => {
  landingTextProject2.classList.add("active");
});
landingNumProject2.addEventListener("mouseleave", () => {
  landingTextProject2.classList.remove("active");
});

landingNumProject3.addEventListener("mouseenter", () => {
  landingTextProject3.classList.add("active");
});
landingNumProject3.addEventListener("mouseleave", () => {
  landingTextProject3.classList.remove("active");
});

landingNumProject4.addEventListener("mouseenter", () => {
  landingTextProject4.classList.add("active");
});
landingNumProject4.addEventListener("mouseleave", () => {
  landingTextProject4.classList.remove("active");
});

const popup = document.getElementById('welcomePopup');
const closeBtn = document.getElementById('closePopup');

function checkScroll() {
  const triggerPoint = document.querySelector('section').offsetHeight || 400;

  if (window.scrollY > triggerPoint) {
    popup.classList.add('active');
  } else {
    popup.classList.remove('active');
  }
}

window.addEventListener('scroll', checkScroll);

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  window.removeEventListener('scroll', checkScroll);
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We'll be in touch soon.");
});
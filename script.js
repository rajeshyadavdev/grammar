// chnage navbar on scroll

window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
});

// open and hide onclick faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    // change the faq_icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  });
});

// navmenu show/close
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click',()=>{
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  openBtn.style.display = 'none';
});

const closeNav = ()=>{
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click',closeNav)



const toggleBtn = document.querySelector('#darklight-mode');

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "dark";

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  toggleBtn.innerHTML = "<i class='uil uil-moon'></i>"; // switch to dark
} else {
  document.body.classList.remove("light-theme");
  toggleBtn.innerHTML = "<i class='uil uil-brightness'></i>"; // switch to light
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    toggleBtn.innerHTML = "<i class='uil uil-moon'></i>";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.innerHTML = "<i class='uil uil-brightness'></i>";
    localStorage.setItem("theme", "dark");
  }
});


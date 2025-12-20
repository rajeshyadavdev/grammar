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
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const body = document.body;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    hero.style.backgroundImage = "linear-gradient(to bottom right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
    body.style.backgroundImage = "linear-gradient(to bottom right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
  } else {
    navbar.classList.remove('scrolled');
    hero.style.backgroundImage = "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
    body.style.backgroundImage = "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
  }
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
});

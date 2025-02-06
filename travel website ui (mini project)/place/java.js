window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = 'rgb(255, 255, 255)';
    }
};
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
});
// JavaScript to handle card selection
const cards = document.querySelectorAll('.category-card');
cards.forEach(card => {
  card.addEventListener('click', function() {
    cards.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});


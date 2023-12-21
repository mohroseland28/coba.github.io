const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = (event) => {
    event.preventDefault(); // Hindari perilaku default
    navbarNav.classList.toggle('active');
}

// Menghilangkan sidebar saat mengklik di luar elemen hamburger atau navbar
document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        const nav = document.body.getElementsByTagName('nav')[0];
        const h2Elements = nav.getElementsByTagName('h2');
        nav.getElementsByTagName('hr')[0].classList.toggle('active');
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].classList.toggle('active');
        }
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        const hamburger = document.getElementById('hamburger');
        const nav = document.body.getElementsByTagName('nav')[0];
        const h2Elements = nav.getElementsByTagName('h2');
        hamburger.classList.remove('active');
        nav.getElementsByTagName('hr')[0].classList.remove('active');
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].classList.remove('active');
        }
    }
});
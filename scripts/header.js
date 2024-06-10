let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-75px"; // Adjust this value based on your header's height
    } else {
        // Scrolling up
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

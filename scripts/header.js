let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-75px"; // Adjust based on your header's height
        header.classList.remove('scrolled-up'); // Remove the black background
    } else {
        // Scrolling up
        header.style.top = "0";
        if (scrollTop > 100) { // Only add the background if not at the top of the page
            header.classList.add('scrolled-up');
        } else {
            header.classList.remove('scrolled-up'); // Ensure background is transparent at the top
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});

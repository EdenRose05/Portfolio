document.addEventListener('DOMContentLoaded', function () {
    const layers = document.querySelectorAll('.layer');
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');

    element1.addEventListener('click', function () {
        scrollToTopWithParallax();
    });

    element2.addEventListener('click', function () {
        scrollToBottomWithParallax();
    });

    window.addEventListener('scroll', function () {
        let yOffset = window.scrollY;

        layers.forEach(function (layer, index) {
            let speed = 0.5 * (index + 1);
            layer.style.transform = `translateY(${yOffset * speed}px)`;
        });
    });

    function scrollToTopWithParallax() {
        // Implement parallax effect for scrolling to the top
        // Update the background position or use CSS transitions/animations
        layers.forEach(function (layer) {
            layer.style.transform = 'translateY(0)';
        });
        // Additional animations or adjustments as needed
    }

    function scrollToBottomWithParallax() {
        // Implement parallax effect for scrolling to the bottom
        // Update the background position or use CSS transitions/animations
        layers.forEach(function (layer, index) {
            let speed = 0.5 * (index + 1);
            let scrollDistance = window.innerHeight * speed;
            layer.style.transform = `translateY(${scrollDistance}px)`;
        });
        // Additional animations or adjustments as needed
    }
});
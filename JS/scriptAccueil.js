document.getElementById('button').addEventListener('click', function () {
    navigate('contact', 'accueil', 'block');
});

document.getElementById('svg').addEventListener('click', function () {
    navigate('accueil', 'contact', 'block');
});
document.getElementById('element1').addEventListener('click', function () {
    navigate('accueil', 'contact', 'block');
});

document.getElementById('element2').addEventListener('click', function () {
    navigate('accueil', 'grid', 'grid');
});

document.getElementById('link4').addEventListener('click', function () {
    navigate('grid', 'accueil', 'block');
});

function navigate(fromId, toId, displayValue) {
    const fromViewport = document.getElementById(fromId);
    const toViewport = document.getElementById(toId);

    fromViewport.style.transform = 'translateY(' + (fromId === 'accueil' ? '-100%' : '100%') + ')';
    toViewport.style.transform = 'translateY(0)';

    setTimeout(function () {
        fromViewport.style.display = 'none';
        toViewport.style.display = displayValue;
        toViewport.style.transform = 'translateY(0)';
    }, 500); // Adjust this time to match the transition time (in milliseconds)
}
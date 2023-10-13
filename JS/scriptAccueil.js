document.getElementById('button').addEventListener('click', function () {
    navigate('contact', 'accueil', 'block');
});
document.getElementById('logo').addEventListener('click', function () {
    navigate('contact', 'accueil', 'block');
});
document.getElementById('logo1').addEventListener('click', function () {
    navigate('grid', 'accueil', 'block');
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
    }, 500);
}

function open(contentId){
    document.getElementById('modal').style.display = 'block';
    switch (contentId){
        case 'aPropos':
            document.getElementById('contentContainer').innerHTML = document.getElementById('propos').innerHTML;
            break;
        case 'mesProjets':
            document.getElementById('contentContainer').innerHTML = document.getElementById('projets').innerHTML;
            break;
        case 'ceQueJeSaisFaire':
            document.getElementById('contentContainer').innerHTML = document.getElementById('compets').innerHTML;
            break;
        default:
            document.getElementById('contentContainer').innerHTML = 'Default Content';
        
    }
}

function close(){
    document.getElementById('modal').style.display = 'none';
}

window.addEventListener('click', function(event){
    const modal= this.document.getElementById('modal');
    if(event.target == modal){
        close();
    }
});

document.getElementById('proposLink').addEventListener('click', function(event){
    event.preventDefault();
    open('aPropos');
});
document.getElementById('projetsLink').addEventListener('click', function(event){
    event.preventDefault();
    open('mesProjets');
});
document.getElementById('competsLink').addEventListener('click', function(event){
    event.preventDefault();
    open('ceQueJeSaisFaire');
});

document.getElementById('close').addEventListener('click', close);
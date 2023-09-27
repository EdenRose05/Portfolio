document.querySelector("header>p").addEventListener("click", open);

function open(){
    form.style.display ="block";
}

document.querySelector("main>form").addEventListener("click", close);

function close(){
    form.style.display ="none";
}

window.addEventListener("click", window);

function window(event){
    if(event.target === form){
        close();
    };
}

const arrow = document.getElementById('arrow');

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 600){
        arrow.classList.add('opacity');
        return;
    }
    else{
        arrow.classList.remove('opacity');
    }
});
const clickSound = document.getElementById('click-sound');

document.querySelectorAll('.navi').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            clickSound.play();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});


let btn = document.getElementById('scrl-btn');

window.onscroll = function(){
    if(window.scrollY >= 400){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
};

btn.onclick = function(){
    clickSound.play();
    scroll({
        top:0,
        behavior:"smooth",
    })
};



btn = document.querySelector(".btn__bg");
bg = document.querySelector(".wrapper");

btn.addEventListener('click', () => {
    if (bg.classList.contains('bg__cyan')) {
        bg.classList.remove('bg__cyan');
        bg.classList.add('bg__green');
    } else {
        bg.classList.add('bg__cyan');
        bg.classList.remove('bg__green');
    }
})
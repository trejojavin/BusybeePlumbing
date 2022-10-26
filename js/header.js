const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('navigation');

toggle.addEventListener('click', (click) => {
    toggleNav();
})

function toggleNav(){
    nav.classList.toggle('open');
}

function padTop(){
    const page = document.querySelector('main.page-content');
    const header = document.querySelector('header.header-wrap');

    let offset = header.offsetHeight;
    console.log(offset + 'px');
    page.style.paddingTop = offset + 'px';
}

padTop();

window.onresize = () => {
    padTop();
}


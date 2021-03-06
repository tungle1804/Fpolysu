var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('#progress'),
    scroll;
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener('scroll', function () {
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        header.classList.add("bg-gray-100");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-gray-100");
    } else {
        header.classList.remove("bg-gray-100");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-gray-100");

    }

});

document.getElementById('nav-toggle').onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
}
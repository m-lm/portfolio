function introduce() {
    const c1 = document.getElementById("curtain");
    const c2 = document.getElementById("paras");
    c1.classList.toggle("introduce");
    c2.classList.toggle("introduce");
}

window.addEventListener("load", introduce);
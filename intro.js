function introduce() {
    const c1 = document.getElementById("curtain");
    const c2 = document.getElementsByClassName("subinfo");
    c1.classList.toggle("introduce");
    for (var i = 0; i < c2.length; i++) {
        c2[i].classList.toggle("introduce");
    }
}

window.addEventListener("load", introduce);
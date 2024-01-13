function introduce() {
    if (localStorage.getItem("theme") == "dark") {
        toggle_theme();
    }
    const c1 = document.getElementById("curtain");
    const c2 = document.getElementsByClassName("subinfo");
    c1.classList.toggle("introduce");
    for (var i = 0; i < c2.length; i++) {
        c2[i].classList.toggle("introduce");
    }
}

function toggle_theme() {
    document.body.classList.toggle("dark");
    if (document.body.className != "dark") {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }
}

window.addEventListener("load", introduce);
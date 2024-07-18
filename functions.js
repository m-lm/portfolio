function introduce() {
    if (localStorage.getItem("theme") == "dark") {
        toggle_theme();
    }
    const x = document.getElementById("curtain");
    const y = document.getElementsByClassName("subinfo");
    x.classList.toggle("introduce");
    for (let i = 0; i < y.length; i++) {
        y[i].classList.toggle("introduce");
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
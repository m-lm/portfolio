function introduce() {
    if (localStorage.getItem("theme") == "dark") {
        toggleTheme();
    }
    const x = document.getElementById("curtain");
    const y = document.getElementsByClassName("subinfo");
    const b = document.getElementById("mode");
    x.classList.toggle("introduce");
    for (let i = 0; i < y.length; i++) {
        y[i].classList.toggle("introduce");
    }
    b.classList.toggle("introduce");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.getElementById("mode").src = "assets/light.svg"
    }
    else {
        document.getElementById("mode").src = "assets/dark.svg"
    }
    if (document.body.className != "dark") {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }
}

window.addEventListener("load", introduce);
/*
window.addEventListener("load", () => {
    document.getElementById("avi").src = (Math.random() >= .5) ? "assets/sky.jpeg" : "assets/me2.jpg";
})
*/
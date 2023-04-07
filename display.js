function displaySection(pid) {
    var section = document.getElementById(pid);
    var sectionParent = document.getElementById("paras");
    for (i = 0; i < sectionParent.children.length; i++) {
        sectionParent.children[i].style.display = "none";
    }
    section.style.display = "inherit";
}

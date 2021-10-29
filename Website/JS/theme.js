function changeTheme(src, obj) {
    var x = document.getElementById("selected");
    x.id = "";
    document.getElementById("cssTheme").setAttribute("href", src);
    obj.id = "selected";
    localStorage.setItem("theme", src);
}

/*window.onload = function loadTheme() {
    var obj = document.getElementById("cssTheme")
    var x = localStorage.getItem("theme")
    if (localStorage.getItem("theme") == null) {
        var x = "themes/classic.css";
    }
    obj.setAttribute("href", x)
}*/
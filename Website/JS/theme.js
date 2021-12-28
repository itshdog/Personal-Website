function changeTheme(src, name, obj) {
    var x = document.getElementById("selected");
    var themeTab = document.getElementById("clickButtonTheme");
    x.id = "";
    document.getElementById("cssTheme").setAttribute("href", src);
    obj.id = "selected";
    localStorage.setItem("theme", src);
    localStorage.setItem("name", name);
    themeTab.innerHTML = '<img src="svgs/iconmonstr-paint-bucket-10.svg"/>'+name;
    setTimeout(themeBlur(), 1000);
}

/*window.onload = function loadTheme() {
    var obj = document.getElementById("cssTheme")
    var x = localStorage.getItem("theme")
    if (localStorage.getItem("theme") == null) {
        var x = "themes/classic.css";
    }
    obj.setAttribute("href", x)
}*/
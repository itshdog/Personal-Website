window.onload = function() {
    var obj = document.getElementById("cssTheme");
    var x = localStorage.getItem("theme");
    if (localStorage.getItem("theme") == null) {
        var x = "themes/classic.css";
    }
    obj.setAttribute("href", x);
}
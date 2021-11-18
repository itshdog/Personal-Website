window.onload = function() {
    var obj = document.getElementById("cssTheme");
    var x = localStorage.getItem("theme");
    obj.setAttribute("href", x);
}
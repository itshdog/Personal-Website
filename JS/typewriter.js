var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);

    var obj = document.getElementById("cssTheme");
    // INITIALIZE
    // Particles.JS Initialize
    var particles = document.getElementById("particles-js");
    var particleState = localStorage.getItem("particleState");
    var particleOn = document.getElementById("particles-enable");
    var particleOff = document.getElementById("particles-disable");
    // Blur Initialize
    var blur = document.getElementsByClassName("portfolio-obj")
    var blurState = localStorage.getItem("blurState");
    var blurOn = document.getElementById("blur-enable");
    var blurOff = document.getElementById("blur-disable");
    // Theme Initialize
    var x = localStorage.getItem("theme");
    var name = localStorage.getItem("name");
    var themeTab = document.getElementById("clickButtonTheme");
    if (localStorage.getItem("theme") == null) {
        var x = "themes/classic.css";
    }
    if (localStorage.getItem("name") == null) {
        var name = "Theme";
    }

    // LOAD
    // Particles.JS Load
    particles.className = particleState
    particleOn.className = localStorage.getItem("particleOn")
    particleOff.className = localStorage.getItem("particleOff")
    // Blur Load
    if (localStorage.getItem("blurOn") == null) {
        blurOn.className = "fas fa-circle selected";
    } else {
        blurOn.className = localStorage.getItem("blurOn")
    }
    if (localStorage.getItem("blurOff") == null) {
        blurOff.className = "far fa-circle hidden";
    } else {
        blurOff.className = localStorage.getItem("blurOff")
    }
    for (var i = 0; i < blur.length; i++) {
        blur[i].style.backdropFilter = blurState;
    }
    // Theme Load
    themeTab.innerHTML = '<i class="fas fa-palette"></i>'+name;
    obj.setAttribute("href", x);
};
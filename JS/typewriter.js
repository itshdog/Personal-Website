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

// Random Integer Generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function randomTheme() {
    let entries = document.getElementsByClassName("theme-entry");
    const theme = entries[getRandomInt(entries.length)].innerHTML;
    let title = theme[0].toUpperCase() + theme.substring(1);
    localStorage.setItem("name", title);
    return String("themes/" + theme.replace(/\s+/g, '').toLowerCase() + ".css");
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
    // Theme Initialize
    var x = randomTheme();
    var name = localStorage.getItem("name");
    var themeTab = document.getElementById("clickButtonTheme");
    var themeLink = document.getElementById("cssTheme")
    themeTab.innerHTML = '<i class="fas fa-palette"></i>' + name
    themeLink.href = x;

    // LOAD
    // Particles.JS Load
    particles.className = particleState
    if (localStorage.getItem("particleOn") == null) {
        particleOn.className = "fas fa-circle selected";
    } else {
        particleOn.className = localStorage.getItem("particleOn")
    }
    if (localStorage.getItem("particleOff") == null) {
        particleOff.className = "far fa-circle hidden";
    } else {
        particleOff.className = localStorage.getItem("particleOff")
    }

    // Remove loading screen
    document.getElementById("html").style.overflow = 'auto';
    document.getElementById("html").style.height = 'auto';
    document.getElementById("loading-screen").style.display = "none";
};
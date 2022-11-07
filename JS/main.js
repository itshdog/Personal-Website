function closeTab(name) {
  var x = document.getElementById(name);
  x.className = "hidden";
  x.style.opacity = "0";
}

function openTab(name) {
  var x = document.getElementById(name);
  if (x.className == "hidden") {
    x.className = "";
    x.style.opacity = "1";
  } else if (x.className == "null") {
    x.className = "hidden";
    x.style.opacity = "0";
  } else if (x.className == '') {
    x.className = "hidden";
    x.style.opacity = "0";
  }
}

function openParticles() {
  var x = document.getElementById("tsparticles");
  var button = document.getElementById("particles-enable");
  if (x.className == "hidden") {
    x.className = "";
    x.style.opacity = "1";
    localStorage.setItem("tsparticles", "null");
    localStorage.setItem("particlesState", "fas fa-circle selected");
    button.className = "fas fa-circle selected";
  } else if (x.className == "null") {
    x.className = "hidden";
    x.style.opacity = "0";
    localStorage.setItem("tsparticles", "hidden");
    localStorage.setItem("particlesState", "fas fa-circle");
    button.className = "fas fa-circle";
  } else if (x.className == '') {
    x.className = "hidden";
    x.style.opacity = "0";
    localStorage.setItem("tsparticles", "hidden");
    localStorage.setItem("particlesState", "fas fa-circle");
    button.className = "fas fa-circle";
  }
}

// Scroll to top. Utilized by "itshdog.com" in the header
  function scrollToTop() {
    var x = document.getElementById("title");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

// Change theme function. Utilized by theme entries in Theme Wrapper
function changeTheme(src, name, obj) {
  // Variables
  var x = document.getElementById("selected");
  var themeTab = document.getElementById("clickButtonTheme");
  // Reset selected theme
  x.id = "";
  document.getElementById("cssTheme").setAttribute("href", src);
  // Set newly clicked object to selected
  obj.id = "selected";
  // Set storage items
  localStorage.setItem("theme", src);
  localStorage.setItem("name", name);
  // Load name, and close theme tab
  themeTab.innerHTML = '<i class="fas fa-palette"></i>'+name;
  closeTab('themeWrapper');
}

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

// Search bar for Theme wrapper
function search_theme() {
  let input = document.getElementById('theme-searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName("theme-entry");

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}

// Search bar for Settings wrapper
function search_settings() {
  // Get input
  let input = document.getElementById('settings-searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName("settings-entry");

  // Display options that match input
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}

// Header Open/Close button
function hideButton() {
  // Variables
  var flipped = "scaleX(-1)";
  var regular = "scaleX(1)";
  var closeIcon = document.getElementById("closeIcon")
  // Open Header
  if (document.getElementById("title") == null) {
      document.getElementById("titleHidden").id = "title";
      document.getElementById("header-container").style.width = "100%";
      closeIcon.style.transform = regular;
  // Close Header
  } else {
      document.getElementById("title").id = "titleHidden";
      document.getElementById("header-container").style.width = "3em";
      closeIcon.style.transform = flipped;
  }

  // Header icon wait time
  // For when header is opened/closed with hideButton()
  if (document.getElementById("githubVisible") == null) {
      setTimeout(function() { document.getElementById("githubHidden").id = "githubVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("githubVisible").id = "githubHidden"; }, 10);
  }

  if (document.getElementById("linkedinVisible") == null) {
      setTimeout(function() { document.getElementById("linkedinHidden").id = "linkedinVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("linkedinVisible").id = "linkedinHidden"; }, 10);
  }

  if (document.getElementById("resumeVisible") == null) {
      setTimeout(function() { document.getElementById("resumeHidden").id = "resumeVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("resumeVisible").id = "resumeHidden"; }, 10);
  }
}

// OnLoad
window.onload = function() {
  var obj = document.getElementById("cssTheme");
  var objTab = document.getElementById("clickButtonTheme");
  var all = document.getElementsByClassName("theme-entry");
  var particlesWrapper = document.getElementById("tsparticles");
  var particlesButton = document.getElementById("particles-enable");
  // Set Theme
  var theme = randomTheme();
  obj.href = theme;
  // Set name
  var name = localStorage.getItem("name");
  if (localStorage.getItem("name") == null) {
    var name = "Theme"
  }
  objTab.innerHTML = '<i class="fas fa-palette"></i>' + name
  // Set matching theme as selected
  for (i = 0; i < all.length; i++) {
    if (all[i].innerHTML.toLowerCase() == name.toLowerCase()) {
      all[i].setAttribute('id', "selected");
    }
  }
  if (localStorage.getItem("particlesState") == "null") {
    localStorage.setItem("particlesState", "fas fa-circle selected");
  }
  particlesWrapper.className = localStorage.getItem("tsparticles");
  particlesButton.className = localStorage.getItem("particlesState");
  // Close loading screen
  document.getElementById("html").style.overflow = 'auto';
  document.getElementById("html").style.height = 'auto';
  document.getElementById("loading-screen").style.display = "none";

  var bodytext = document.getElementById("body-text");
  var subtext = document.getElementById("front-splash");
  var buttons = document.getElementById("frontButtonList");

  bodytext.setAttribute('class', 'loaded-top');
  subtext.setAttribute('class', 'loaded');
  buttons.setAttribute('class', 'loaded');
}
  
function hideButton() {
    var flipped = "scaleX(-1)";
    var regular = "scaleX(1)";
    var closeIcon = document.getElementById("closeIcon")
    if (document.getElementById("title") == null) {
        document.getElementById("titleHidden").id = "title";
        document.getElementById("header").style.width = "calc(100% - min(10vh, 10vw))";
        closeIcon.style.transform = regular;
    } else {
        document.getElementById("title").id = "titleHidden";
        document.getElementById("header").style.width = "min(7.25vh, 15vw)";
        closeIcon.style.transform = flipped;
    }

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
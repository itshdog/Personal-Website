// (async () => {
//     await tsParticles.load("tsparticles", {
//         preset: "fountain",
//     });

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100
        },
        links: {
            enable: true,
            opacity: 0.5,
            distance: 100
        },
        move: {
            enable: true
        },
        opacity: {
            value: {min:0.2, max:0.3}
        },
        size: {
            value: {min:2, max:4}
        },
    },
    preset: "fountain",
});

function updateParticles(value) {
    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: value
            },
            links: {
                enable: true,
                opacity: 0.5,
                distance: 100
            },
            move: {
                enable: true
            },
            opacity: {
                value: { min: 0.2, max: 0.3 }
            },
            size: {
                value: { min: 2, max: 4 }
            },
        },
    });
    document.getElementById("pauseParticlesButton").className = "fas fa-circle selected";
}

function pauseParticles() {
    var item = document.getElementById("pauseParticles");
    var button = document.getElementById("pauseParticlesButton");

    if (item.className == "settings-entry play") {
        tsParticles.domItem(0).pause();
        button.className = "fas fa-circle";
        item.className = "settings-entry";
    } else if (item.className == "settings-entry") {
        tsParticles.domItem(0).play();
        item.className = "settings-entry play";
        button.className = "fas fa-circle selected";
    }
}
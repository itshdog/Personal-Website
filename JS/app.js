tsParticles.load("tsparticles", {
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            }
        }
    },
    particles: {
        links: {
            enable: true,
            opacity: 0.2,
            distance: 150
        },
        move: {
            enable: true
        },
        opacity: {
            value: {min:0.2, max:0.3}
        },
        size: {
            value: {min:2, max:5}
        }
    }
})
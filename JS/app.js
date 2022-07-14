// (async () => {
//     await tsParticles.load("tsparticles", {
//         preset: "fountain",
//     });
//   })();


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
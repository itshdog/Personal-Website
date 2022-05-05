function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function randomTheme() {
    let entries = ["80safterdark","8008","aether","arch","bento","blueberry","carbon","classic","copper","cyberspace","deku","dracula","futurefunk","goldfish","grandprix","gruvbox","horizon","moonlight","ocean","onedark","reddragon","retro","rosepinemoon","royalty","samurai","sonokai","striker","terminal","terrorbelow","vscode","watermelon"]
    const theme = entries[getRandomInt(entries.length)];
    return String("themes/" + theme + ".css");
};

window.onload = function () {
    document.getElementById("cssTheme").href = randomTheme();
}
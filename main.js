song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw() {
    image(webcam, 0, 0, 600, 450)
}
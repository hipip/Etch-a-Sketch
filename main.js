var mouseClicked = false;
var size = 32;

const container = document.querySelector(".container");
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        const newSquare = document.createElement("div");
        newSquare.style.width = `calc(var(--size) / ${size}`;
        newSquare.style.height = `calc(var(--size) / ${size}`;
        newSquare.addEventListener("mouseover", changeColor);
        newSquare.addEventListener("mousedown", changeColor2);
        container.append(newSquare);
    }
}

container.addEventListener("mousedown", () => (mouseClicked = true));
container.addEventListener("mouseup", () => (mouseClicked = false));

createGrid(16);

function random(n) {
    return Math.floor(Math.random() * (n + 1));
}
function randomColor() {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
}

function changeColor(e) {
    if (mouseClicked) e.target.style.backgroundColor = randomColor();
}
function changeColor2(e) {
    e.target.style.backgroundColor = randomColor();
}

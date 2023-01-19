var mouseClicked = false;
let container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderLabel = document.querySelector(".slider-label");

function createGrid(size) {
    container.remove();
    container = document.createElement("div");
    container.classList.add("container");
    container.addEventListener("mousedown", () => (mouseClicked = true));
    container.addEventListener("mouseup", () => (mouseClicked = false));
    document.body.append(container);
    const dimension = 600 / size;
    for (let i = 0; i < size * size; i++) {
        const newSquare = document.createElement("div");
        newSquare.style.width = dimension + "px";
        newSquare.style.height = dimension + "px";
        newSquare.addEventListener("mouseover", changeColor);
        newSquare.addEventListener("mousedown", changeColor2);
        container.append(newSquare);
    }
}
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

slider.addEventListener("input", (e) => {
    sliderLabel.innerText = slider.value;
    createGrid(slider.value);
});

createGrid(slider.value);

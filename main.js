var mouseClicked = false;
let container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".grid-size");
const showBorder = document.querySelector(".show-border");

gridSize.innerText = slider.value;

document.addEventListener("mousedown", () => (mouseClicked = true));
document.addEventListener("mouseup", () => (mouseClicked = false));

function createGrid(size) {
    container.remove();
    container = document.createElement("div");
    container.classList.add("container");
    const dimension = 600 / size;
    for (let i = 0; i < size * size; i++) {
        const newSquare = document.createElement("div");
        newSquare.style.width = dimension + "px";
        newSquare.style.height = dimension + "px";
        newSquare.addEventListener("mouseover", changeColor);
        newSquare.addEventListener("mousedown", changeColor2);
        showBorder.checked ? newSquare.classList.add("show-border") : "";
        container.append(newSquare);
    }
    document.body.append(container);
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

showBorder.addEventListener("change", (e) => {
    document
        .querySelectorAll(".container > div")
        .forEach((elem) =>
            showBorder.checked
                ? elem.classList.add("show-border")
                : elem.classList.remove("show-border")
        );
});

slider.addEventListener("input", (e) => {
    gridSize.innerText = slider.value;
    createGrid(slider.value);
});

createGrid(slider.value);

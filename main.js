const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.addEventListener("mouseover", handleClick);
        newSquare.addEventListener("mousedown", handleClick);
        container.append(newSquare);
    }
}

function random(n) {
    return Math.floor(Math.random() * (n + 1));
}
function randomColor() {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
}

function handleClick(e) {
    e.preventDefault();
    if (e.type === "mousedown") e.target.style.backgroundColor = randomColor();
}

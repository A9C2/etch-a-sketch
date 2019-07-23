const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", restart)

function restart() {
    window.location.reload(true);
}

function createGrid() {
    let gridWidth = parseInt(prompt("What would you like the width to be? [max 100]"), 10);
    if (gridWidth > 100) gridWidth = 100;
    for (i = 0; i < (gridWidth * gridWidth); i++) {
        var div = document.createElement("DIV");
        div.classList.add("box");
        div.style.width = `${840 / gridWidth}px`;
        div.style.height = `${840 / gridWidth}px`;
        div.addEventListener("mouseenter", paint);
        document.body.querySelector("#grid").appendChild(div);
    }

    function paint(e) {
        if (e.target.style.backgroundColor == "") {
            e.target.style.backgroundColor = getRandomRGB();
        } else {
            console.log(e.target.style.filter);
            switch (e.target.style.filter) {
                case "":
                    e.target.style.filter = "brightness(80%)";
                    break;
                case "brightness(80%)":
                    e.target.style.filter = "brightness(60%)";
                    break;
                case "brightness(60%)":
                    e.target.style.filter = "brightness(40%)";
                    break;
                case "brightness(40%)":
                    e.target.style.filter = "brightness(20%)";
                    break;
                case "brightness(20%)":
                    e.target.style.filter = "brightness(0%)";
                    break;
            }
        }
    }
}

function getRandomRGB() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
createGrid();
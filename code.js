
for (i = 0; i < 16; i++) {
    var div = document.createElement("DIV");
    div.classList.add("box");
    div.addEventListener("click", paint)
    document.body.querySelector("#grid").appendChild(div);
}

function paint(e) {
    e.target.classList.add("painted");
}


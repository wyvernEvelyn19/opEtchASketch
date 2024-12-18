function createGrid() {
  let n = prompt("Enter the number of squares per row in the grid: ");
  const gridContainer = document.querySelector("#grid");
  gridContainer.style.pointerEvents = "all";
  gridContainer.innerHTML = "";
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      let div = document.createElement("div");
      div.style.height = `${1000 / n}px`;
      div.style.width = `${1000 / n}px`;
      div.style.opacity = "0";
      div.style.border = " 1px solid red";
      div.className = "grid-ele";
      gridContainer.appendChild(div);
    }
  }
}

const createGridButton = document.querySelector("#create");
createGridButton.addEventListener("click", createGrid);

const gridContainer = document.querySelector("#grid");
gridContainer.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "red";
  let oldOpacity = parseFloat(e.target.style.opacity);
  oldOpacity = oldOpacity + 0.1;
  if (oldOpacity > 1) {
    e.target.style.opacity = "1";
  } else {
    e.target.style.opacity = oldOpacity;
  }
});

function buildDrawWindow (windowSize) {
  let pixels = 700 / windowSize;
  const drawWindow = document.querySelector('#container');
  drawWindow.replaceChildren();
  for (i=0; i < windowSize; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (x=0; x < Math.ceil(windowSize * 1.5); x++) {
      const column = document.createElement('div');
      column.setAttribute('class', 'box');
      column.style.height = pixels + 'px';
      column.style.width = pixels + 'px';
      row.appendChild(column);
    }
    drawWindow.appendChild(row);
  }
  const colorSelector = document.querySelector('#colorSelector');
  addHoverEvent(colorSelector.value);
}


function clearBoard () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.backgroundColor = '';
  });
  const slider = document.querySelector('#densitySlider');
  buildDrawWindow(slider.value);
}


function addButtonEvent () {
  const btn = document.querySelector('#clear');
  btn.onclick = () => clearBoard();
}


function addColorEvent () {
  const colorSelector = document.querySelector('#colorSelector');
  colorSelector.onchange = () => addHoverEvent(colorSelector.value);
}


function addHoverEvent (color) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = color;
    });
  });
}


function addSliderEvent () {
  const slider = document.querySelector('#densitySlider');
  slider.onchange = () => {
    buildDrawWindow(slider.value);
    const sliderValue = document.querySelector('#densityValue');
    sliderValue.textContent = slider.value;
  }
}


clearBoard();
addColorEvent();
addButtonEvent();
addSliderEvent();
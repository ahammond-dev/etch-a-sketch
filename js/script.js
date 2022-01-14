function buildDrawWindow (windowSize) {
  let pixels = 800 / windowSize;
  const drawWindow = document.querySelector('#container');
  drawWindow.replaceChildren();
  for (i=0; i < windowSize; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (x=0; x < windowSize; x++) {
      const column = document.createElement('div');
      column.setAttribute('class', 'box');
      column.style.height = pixels + 'px';
      column.style.width = pixels + 'px';
      row.appendChild(column);
    }
    drawWindow.appendChild(row);
  }
  addHoverEvent(color);
}


function addHoverEvent (color) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = color;
    });
  });
}


function clearBoard () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.backgroundColor = '';
  });
  while(true) {
    windowSizeStr = prompt('How Many Squares per Side? (Max of 100).', '16');
    windowSize = Number(windowSizeStr);
    if (windowSize > 0 && windowSize <= 100)
      break;
  }
  buildDrawWindow(windowSize);
}


function addButtonEvent () {
  const btn = document.querySelector('#clear');
  btn.onclick = () => clearBoard();
}



let color = 'blue'
clearBoard();
addButtonEvent();

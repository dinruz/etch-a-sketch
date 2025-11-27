// create grid
const container = document.querySelector('#container');

function createFlexGrid(gridSize) {
    container.innerHTML = '';

    // cell height
    const cellPercentage = 100 / gridSize;

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
    
        row.style.height = `${cellPercentage}%`;
        
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    
    addHoverEffect(); // hover after adding cells!
}

function changeCellColor(e) {
    e.target.style.background =getRandomColor();
}

function addHoverEffect() {
  
    const cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", changeCellColor);
    });
}

// New gridsize
function promptNewSize() {
    let newSize;

    do {
        let input = prompt("Enter the grid size (e.g., 16 for 16x16). The maximum size is 100x100.");
        

        if (input === null || input.trim() === "") {
            return; 
        }

        newSize = parseInt(input);

       
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Invalid input. Please choose number between 1 and 100.");
            newSize = 0; 
        }

    } while (newSize === 0);


    createFlexGrid(newSize);
}

createFlexGrid(16);

const sizeButton = document.querySelector('#size-button');
if (sizeButton) {
    sizeButton.addEventListener('click', promptNewSize);
}



// random colours

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

       return `rgba(${r}, ${g}, ${b}, 0.4)`;
}

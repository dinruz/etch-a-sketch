// Creating Grid

const container = document.querySelector('#container');

function createFlexGrid(gridSize) {
     container.innerHTML = '';     

    for (let i = 0; i < gridSize; i++) {          // rows
        let row = document.createElement('div');
        row.classList.add('grid-row');
        
        for (let j = 0; j < gridSize; j++) {      // columns = cells
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell); 
        }        
        container.appendChild(row); 
    }
}
createFlexGrid(16);

// Hovering

const cells = document.querySelectorAll('.grid-cell');

function changeCellColor(e){
    e.target.style.background="darkgrey"; // e.target - referencing the SPECIFIC element (not 'cells' NodeList)
}

cells.forEach(cell => {
    cell.addEventListener("mouseenter", changeCellColor);
});


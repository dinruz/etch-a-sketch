//Refs
const container = document.querySelector('#container');

// Create Grid


function createGrid(grid){
    size = grid*grid;
   for (let i=0; i<size; i++){
        let newRow = document.createElement('div');
        let newColumn = document.createElement('div');
        container.appendChild(newRow);
        container.appendChild(newColumn);   
    }

}


createGrid(16);
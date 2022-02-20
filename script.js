function random (){
    return Math.round(Math.random() * 255)
}

function newColor (e){
    e.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`
}

function buildCells(rows = 16, cols = 16){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.innerHTML = '';

    for(let i = 0; i < (rows * cols); i++){
        const cell = document.createElement('div')
        cell.className = 'grid-item';
        cell.addEventListener('mouseenter', newColor);
        container.appendChild(cell);
    }
}

function newGrid () {
    let size = Number(prompt('Pick a number between 1 and 100'));
    if(size > 0 && size <= 100){
        buildCells(size, size)
    }else{
        buildCells()
        alert('Number must be between 0 and 100');
    }
}

const container = document.querySelector('.container');
buildCells();

const button = document.getElementById('clear');
button.addEventListener('click',newGrid);
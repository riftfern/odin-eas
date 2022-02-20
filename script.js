let clearBtn = document.getElementById('clear');

let createBoxes = function(numPerRow){
    const container = document.querySelector('#container');
    const total = (numPerRow * numPerRow) + numPerRow;
    const mod = numPerRow + 1;

    

    for(let i = 1; i < total; i++){
        const div = document.createElement('div');

        if (i % mod === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%";
          } else {
            div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
          }
        
        container.appendChild(div);
        div.classList.add('color');

        document.getElementsByClassName('color')
        for(let i = 0; i < total; i++){
            div.addEventListener('mouseover', function(e) {
                e.target.style.background = 'black';
            });
            
            clearBtn.addEventListener('click', function(e){
                div.style.backgroundColor = '';
            })
           
            

        }

        //const clear = document.querySelector('#clear');
        //clear.addEventListener('click', function(e;) => {
            
        //})

    }
    
}    
const clearBoxes = function(){

}
createBoxes(16);
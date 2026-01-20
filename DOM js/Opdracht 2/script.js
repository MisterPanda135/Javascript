let button = document.querySelector(".button");
button.addEventListener("click", addElementen);

let i = true;

function addElementen(){
    if (i){
        for (let j = 1; j <= 49; j++){
           const div = document.createElement("div");

            div.textContent = j;
        

            div.classList.add("container__item");

            document.querySelector(".container").appendChild(div); 
            i = false;
        }
        
    }
    
}
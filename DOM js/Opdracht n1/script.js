let button = document.querySelector(".button");
button.addEventListener("click", addElementen);

let i = 1;

function addElementen(){
    if (i <= 49){
        const div = document.createElement("div");

        div.textContent = i;
        i++

        div.classList.add("container__item");

         document.querySelector(".container").appendChild(div);
    }
    
}
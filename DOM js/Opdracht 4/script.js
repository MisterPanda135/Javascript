let button = document.querySelector("#button");
button.addEventListener("click", waardes);

let button2 = document.querySelector("#button2");
button2.addEventListener("click", countNumber(1));

let textElement = document.querySelector("#text");

function waardes() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(array);
    // for (let i = 0; i < array.length; i++) {
    //     textElement.textContent += " " + array[i];
    // }
    textElement.textContent = array;
}

function countNumber(nummer){
    let aantal = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == nummer){
            aantal++
        }
    }

}
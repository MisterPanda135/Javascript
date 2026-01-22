let button = document.querySelector("#button");

let arr = [];
let textElement = document.querySelector("#text");

let button2 = document.querySelector("#button2");
button2.addEventListener("click", countNumber(1));
button.addEventListener("click", waardes);

function waardes() {
    arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //     textElement.textContent += " " + arr[i];
    // }
    textElement.textContent = arr;
}

 function countNumber(nummer){
    let aantal = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == nummer){
             aantal++
         }
    }
    console.log(aantal);

}
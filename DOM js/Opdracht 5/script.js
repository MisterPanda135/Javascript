let button = document.querySelector("#button");

let arr = [];
let textElement = document.querySelector("#text");
let textElement2 = document.querySelector("#text2")

button.addEventListener("click", () => {
    waardes();
    textElement2.textContent = "";
    for (let i = 1; i <=6; i++){
        countNumber(i);
    }
});

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

function countNumber(nummer) {
    let aantal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == nummer) {
            aantal++
        }
    }
    console.log(aantal + "x " + nummer);
    textElement2.textContent += aantal + " x " +  nummer + "\n | ";

}
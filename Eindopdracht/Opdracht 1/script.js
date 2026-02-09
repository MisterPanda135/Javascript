let button = document.querySelector("#button");

let textElement = document.querySelector("#text");
let textElement2 = document.querySelector("#text2")

button.addEventListener("click", () => {
    waardes();
});

let waardes = () => {
    const arr1 = [0, 0, 0, 0, 0, 0];
    const arr2 = [0, 0, 0, 0, 0, 0];
    const arr3 = [0, 0, 0, 0, 0, 0];
    const arr4 = [0, 0, 0, 0, 0, 0];
    const all = [arr1, arr2, arr3, arr4];
    
    const test = all.map(arr => arr.map(x => (Math.floor(Math.random() * 6) + 1)));

    textElement.textContent = test[0] + "| |" + test[1];
    textElement2.textContent = test[2] + "| |" + test[3];
    
    total = test.map(arr => arr.reduce((sum, n) => sum + n, 0));
    player1 = total[1] + total[0];
    player2 = total[2] + total[3];
    if (player1 > player2){
        console.log("Player 1 has " + player1 + "points");
        console.log("Player 2 has " + player2 + "points");
        console.log("Player 1 wins!");
    }
}

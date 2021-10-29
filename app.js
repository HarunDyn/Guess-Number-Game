const button = document.querySelector("button");
const input = document.querySelector("input");
const alert = document.querySelector(".alert");
const numberChoose = document.querySelector(".numberOfChoese");
const remainAttempt = document.querySelector(".remain-attempts");
const win = document.querySelector("#win");
const defeat = document.querySelector("#defeat")
const body = document.body;
// const buttonAgain = document.querySelector(".playAgain");

button.addEventListener("click", compareNumber);
// buttonAgain.addEventListener("click", playAgain);


let winNumber = Math.floor(Math.random() * 99 + 1)
let num1 = Math.floor(Math.random() * 3 + 2)
let num2 = Math.floor(Math.random() * 3 + 2)
console.log(winNumber);

let remain = 5;
let winScore = 0;
let defeatScore = 0;
let money = Math.floor(Math.random() * 10000 + 1000)


function compareNumber(e) {
    console.log(e.target)
    let number = input.value.trim();
    console.log(number)
    if (Number.isInteger(Number(number))) {
        remain -= 1
        if (number == winNumber) {
            setTimeout(function () {
                alert.innerHTML = `<div class="alert-win" style="text-align: center;">Congratulations, You win ..</div`
            }, 0);
            setTimeout(function () {
                alert.innerHTML = ``
            }, 1000);
            winScore += 1;
            winNumber = Math.floor(Math.random() * 99 + 1);
            remainAttempt.innerHTML = "";
            numberChoose.innerHTML = "";
            remain = 5;
            console.log(winNumber)

        } else {
            numberChoose.innerHTML += `<span>${input.value.trim()}</span>` + ` | `;
            remainAttempt.innerHTML = `<div>You have ${remain}</div>`

        }

        console.log(` numberof choose : ${remain}`)

        if (remain == 0) {
            setTimeout(function () {
                alert.innerHTML = `<div class="alert-lose" style="text-align: center;">Sorry, You lost .. </div`;
            }, 0);
            setTimeout(function () {
                alert.innerHTML = ``
            }, 1000);
            defeatScore += 1;
            winNumber = Math.floor(Math.random() * 99 + 1);
            remainAttempt.innerHTML = "";
            numberChoose.innerHTML = "";
            remain = 5;
            console.log(winNumber)
        }

        input.value = "";

        if (remain == 3) {
            confirm(`you must choose between ${winNumber - num1} and ${+winNumber + num2}`)
        }

        win.innerHTML = winScore;
        defeat.innerHTML = defeatScore;

        if (winScore == 3) {
            console.log("tamam")
            body.innerHTML = "";
            body.innerHTML = `<div class="finish-win">Tebrikler $${money} Kazandınız! Paranızı almak için en yakın zamanda Şubemize bekliyoruz..!</div>`;
        } else if (defeatScore == 3) {
            body.innerHTML = "";
            body.innerHTML = '<div class="finish-defeat">Umarım aşkta kazanırsınız. İyi günler..</div>';
        }

    } else {
        confirm("Sayı giriniz");
        input.value = "";
    }


}

// function playAgain(e) {
//     e.preventDefault();
//     console.log(e.target)
//     body.innerHTML = "";
//     body.innerHTML = `   <div class="container">
//         <img src="./images/img-banner.jpg" alt="">
//         <div class="find-number">
//             <h1>Guess The Number (1-100)</h1>
//             <input type="text">
//             <button>CHECK</button>
//             <div class="alert"></div>
//             <div class="numberOfChoese"></div>
//             <div class="remain-attempts"></div>
//         </div>
//         <div class="table">
//             <div class="win">Win: <span id="win"></span></div>
//             <div class="defeat">Defeat: <span id="defeat"></span></div>
//         </div>
//     </div>
//     <button class = "playAgain">Tekrar Oyna</button>
//     <script src="app.js"></script>`

// }
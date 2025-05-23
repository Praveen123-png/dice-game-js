let randomNumber1 = Math.floor((Math.random() * 6)) + 1;

let randomNumber2 = Math.floor((Math.random() * 6)) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

let image1 = document.querySelectorAll('img')[0].setAttribute('src', `images/dice${randomNumber1}.png`);

let image2 = document.querySelectorAll('img')[1].setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 won";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 won";
}
else {
    document.querySelector('h1').innerHTML = "Draw";
}
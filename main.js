// Bonus barre de progression//
document.getElementById('energy').addEventListener('keyup', function (e) {
    var energy = e.target.value;
    document.getElementById('jauge').style.width = energy + '%';
});

let exercice5 = document.getElementsByClassName("carre")[0];
let counter = 0;
// troisiemme cards changement de couleur de la bordure div
exercice5.addEventListener("click", () => {
    if (counter === 0) {
        exercice5.style.backgroundColor = "red";
        counter++;
    } else if (counter === 1) {
        exercice5.style.backgroundColor = "white";
        counter++;
    } else {
        exercice5.style.backgroundColor = "blue";
        counter = 0;
    }
})
// bouton cardimage1 bouton 
document.getElementById("button1").style.backgroundColor = 'red';

document.getElementsByTagName('body')[0].addEventListener('click', function (e) {
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";
});

// fonction pour les malvoyants
function myFunction1() {
    document.getElementsByClassName("demo")[0].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[1].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[2].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[3].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[4].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[5].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[6].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[7].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[8].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[9].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[10].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[11].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[12].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[13].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[14].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[15].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[16].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[17].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[18].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[19].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[20].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[21].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[22].style.font = "italic bold 20px arial,serif";
    document.getElementsByClassName("demo")[23].style.font = "italic bold 20px arial,serif";
}
// fonction nouvelle page 
function myFunction2() {
    window.open("https://www.neko-sama.io/anime/info/214-great-teacher-onizuka-vf");
}
// fonction mouseover/
document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("mouse").innerHTML = "« Moi , Eikichi Onizuka , 22 ans , celibataire et libre comme l’air ! »";
}

function mouseOut() {
    document.getElementById("mouse").innerHTML = "« Un sourire coute moins cher que l’électricité mais donne autant de lumière. »";


}

function displayPhrase() {
    document.getElementById("magic").innerHTML = 'Pour vouloir, il faut pouvoir ; Pour pouvoir, il faut savoir ; Pour savoir, il faut connaître ; Pour connaître, il faut apprendre ; Mais pour apprendre, il faut vouloir';
};


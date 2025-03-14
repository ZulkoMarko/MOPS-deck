const gooza=document.getElementById("kul");

function randomNumber(){
    Math.floor(Math.random()*77)+1;
}

function shuffleDeck(){
const fiveCards=document.getElementById("rac");
fiveCards.innerHTML="";

    for(let i=0;i<5;i++){
let cardImg=document.createElement("img");
let card=randomNumber();
cardImg.src="kartedeck" + "/"+card + ".jpg";
fiveCards.appendChild(cardImg)};

}



    

    gooza.addEventListener("click", shuffleDeck);


let gooza=document.getElementById("kul");

let deck=["\kartedeck/25.jpg",
"\kartedeck/26.jpg",
"\kartedeck/27.jpg",
"\kartedeck/28.jpg",
"\kartedeck/29.jpg",
"\kartedeck/30.jpg",
"\kartedeck/1.jpg",
"\kartedeck/2.jpg",
"\kartedeck/3.jpg",
"\kartedeck/4.jpg",
"\kartedeck5.jpg",
"\kartedeck6.jpg",
"\kartedeck7.jpg",
"\kartedeck8.jpg",
"\kartedeck9.jpg",
"\kartedeck10.jpg",
"\kartedeck11.jpg",
"\kartedeck12.jpg",
"\kartedeck13.jpg",
"\kartedeck14.jpg",
"\kartedeck15.jpg",
"\kartedeck16.jpg",
"\kartedeck17.jpg",
"\kartedeck18.jpg",
"\kartedeck19.jpg",
"\kartedeck/20.jpg",
"\kartedeck/21.jpg",
"\kartedeck/22.jpg",
"\kartedeck/23.jpg",
"\kartedeck/24.jpg"];



function shuffleDeck(){
    for(let i=0;i<5;i++){
let cardImg=document.createElement("img");
let card=Math.floor(Math.random()*deck.length+1);
cardImg.src="kartedeck" + "/"+card + ".jpg";
document.getElementById("rac").appendChild(cardImg);
    };
    }
    

    gooza.addEventListener("click", shuffleDeck);





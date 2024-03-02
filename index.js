// Il existe surement de meilleurs facon de faire. Si j'avais utilisé des "ID" a la place des "class", le code serait plus court de 30 lignes.
// Je pense qu'il aurait été possible de créer un fonction pour gérer le changement de top des éléménts plutot que de tout mettre dans l'event.

const button = document.querySelector(".container-liens");
const popup = document.querySelector(".popup");
const xp = document.querySelector(".xp");
const autoFormation = document.querySelector(".auto-formation");
const vendeurMeuble = document.querySelector(".vendeur-meuble");
const carrossier = document.querySelector(".carrossier");
const vendeurExpert = document.querySelector(".veudeur-expert");
const barman = document.querySelector(".barman");
const autonomie = document.querySelector(".autonomie");
const communication = document.querySelector(".communication");
const minutie = document.querySelector(".minutie");
const strategie = document.querySelector(".strategie");
const rigueur = document.querySelector(".rigueur");
const formation = document.querySelector(".formation");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");
const eleven = document.querySelector(".eleven");
const twelve = document.querySelector(".twelve");
const thirteen = document.querySelector(".thirteen");
const fourteen = document.querySelector(".fourteen");
const fifteen = document.querySelector(".fifteen");
const sixteen = document.querySelector(".sixteen");
const seventeen = document.querySelector(".seventeen");
const eighteen = document.querySelector(".eighteen");
const nineteen = document.querySelector(".nineteen");
const twentyThree = document.querySelector(".twenty-three");
const twentyFive = document.querySelector(".twenty-five");
const overlayOne = document.querySelector(".overlay-one");

button.addEventListener("click", () => {
  if (popup.style.display == "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }

  if (window.innerWidth <= 425 && popup.style.display == "none") {
    xp.style.top = "570px";
    six.style.top = "583px";
    autoFormation.style.top = "620px";
    seven.style.top = "648px";
    vendeurMeuble.style.top = "710px";
    eight.style.top = "738px";
    carrossier.style.top = "800px";
    nine.style.top = "828px";
    vendeurExpert.style.top = "890px";
    eleven.style.top = "938px";
    barman.style.top = "1020px";
    twelve.style.top = "1048px";
    autonomie.style.top = "1170px";
    thirteen.style.top = "1198px";
    communication.style.top = "1250px";
    fourteen.style.top = "1278px";
    minutie.style.top = "1330px";
    fifteen.style.top = "1358px";
    strategie.style.top = "1410px";
    sixteen.style.top = "1458px";
    rigueur.style.top = "1535px";
    seventeen.style.top = "1563px";
    formation.style.top = "1670px";
    eighteen.style.top = "1710px";
    nineteen.style.top = "1710px";
    twentyFive.style.top = "1780px";
    ten.style.height = "1630px";
    twentyThree.style.height = "1630px";
    overlayOne.style.top = "1120px";
  } else if (window.innerWidth <= 425 && popup.style.display == "flex") {
    xp.style.top = "850px";
    six.style.top = "863px";
    autoFormation.style.top = "900px";
    seven.style.top = "928px";
    vendeurMeuble.style.top = "990px";
    eight.style.top = "1018px";
    carrossier.style.top = "1080px";
    nine.style.top = "1108px";
    vendeurExpert.style.top = "1170px";
    eleven.style.top = "1218px";
    barman.style.top = "1300px";
    twelve.style.top = "1328px";
    autonomie.style.top = "1450px";
    thirteen.style.top = "1478px";
    communication.style.top = "1530px";
    fourteen.style.top = "1558px";
    minutie.style.top = "1610px";
    fifteen.style.top = "1638px";
    strategie.style.top = "1690px";
    sixteen.style.top = "1738px";
    rigueur.style.top = "1815px";
    seventeen.style.top = "1843px";
    formation.style.top = "1950px";
    eighteen.style.top = "1990px";
    nineteen.style.top = "1990px";
    twentyFive.style.top = "2060px";
    ten.style.height = "1910px";
    twentyThree.style.height = "1910px";
    overlayOne.style.top = "1400px";
  }
});

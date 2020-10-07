// Antwoord van Tristan
// const buttons = document.querySelectorAll('.big-five-button');

// for (i = 0; i < buttons.length; i++) {
//     if (buttons[i].textContent === "Lion") {
//         buttons[i].addEventListener("click", function () {
//             console.log("Lion");
//         });
//     };
//     if (buttons[i].textContent === "Leopard") {
//         buttons[i].addEventListener("click", function () {
//             console.log("Leopard");
//         });
//     };
//     if (buttons[i].textContent === "Elephant") {
//         buttons[i].addEventListener("click", function () {
//             console.log("Elephant");
//         });
//     };
//     if (buttons[i].textContent === "Rhino") {
//         buttons[i].addEventListener("click", function () {
//             console.log("Rhino");
//         });
//     };
//     if (buttons[i].textContent === "Buffalo") {
//         buttons[i].addEventListener("click", function () {
//             console.log("Buffalo");
//         });
//     };
// };



// Antwoord van Marjolein
const animalSpotted = event => { //event aanmaken
    // console.log("spotted:", event.target.textContent);
    const spottedAnimal = event.target.textContent; // variabele aanmaken voor de verschillende buttons
    const listItem = document.createElement("li"); //variabele aanmaken voor <li> toevoegen
    listItem.appendChild(document.createTextNode(spottedAnimal)); // de <li> vullen met wat er als text in de buttons staat
    const list = document.getElementById("spotted-animals-list"); //variabele list aanmaken voor de lijst waar die in moet komen
    list.appendChild(listItem); // <li> toevoegen aan de variabele list
};

document.addEventListener("DOMContentLoaded", function () { // functie aanmaken
    const animalButtons = document.querySelectorAll(".big-five-button"); // variabele aanmaken om te linken aan de buttons
    animalButtons.forEach(function (animalButton) {  // functie voor elk van de buttons
        animalButton.addEventListener("click", animalSpotted); // klik event om bovenstaand event te linken aan de klik op de button
    })
});

const removeFirstItem = () => {
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
};

const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
};


const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
);
removeFirstItemButton.addEventListener("click", removeFirstItem);

const removeAllButton = document.getElementById("remove-all-button");
removeAllButton.addEventListener("click", removeAll);


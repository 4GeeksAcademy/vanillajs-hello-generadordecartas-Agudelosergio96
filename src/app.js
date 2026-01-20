import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // tipos de carta posible, corazón etc
  const suits = ["♠", "♥", "♣", "♦"];

  // numeros y vaores
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // el primer azar de los tipos
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  // el azar de los valores o letras
  const randomValue = values[Math.floor(Math.random() * values.length)];

//html 
  const topSuit = document.getElementById("topSuit");
  const bottomSuit = document.getElementById("bottomSuit");
  const cardValue = document.getElementById("cardValue");

  // juntos palos y cartas
  topSuit.innerHTML = randomSuit;
  bottomSuit.innerHTML = randomSuit;
  cardValue.innerHTML = randomValue;

  // colores si es diamante rojo 
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
    cardValue.style.color = "red";
  } else {
    // los que deben ser nergini
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
    cardValue.style.color = "black";
  }
};

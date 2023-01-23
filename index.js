import {Counter} from './counter.js'

const modal = document.querySelector("dialog");
const si = document.getElementById("si");
const no = document.getElementById("no");
const containerP1 = document.getElementById("containerPlayer1")
const containerP2 = document.getElementById("containerPlayer2")
const idReset = document.getElementById("reset");
const p1Name = "Nosotros"
const p2Name = "Ellos"
const savedGame = JSON.parse(localStorage.getItem("setGame"));
const p1 = new Counter(p1Name, containerP1, savedGame[p1Name]);
const p2 = new Counter(p2Name, containerP2, savedGame[p2Name]);

idReset.addEventListener("click", () => {
    modal.showModal();
})

no.addEventListener("click", () => {
    modal.close();
})

si.addEventListener("click", () => {
    p1.reset();
    p2.reset();
    modal.close();
})

document.querySelectorAll("button").forEach(el => {
    el.addEventListener("click", () => {
    const saveGame = {
        [p1.name] : p1.score,
        [p2.name] : p2.score
    }
    localStorage.setItem("setGame", JSON.stringify(saveGame));
    });
})
console.log(savedGame);
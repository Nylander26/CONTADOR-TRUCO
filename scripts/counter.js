export class Counter {
    score = 0;
    name;
    scoreElement;
    containerElement;

    constructor(name, containerElement, initialCounter = 0){
        this.name = name
        this.score = initialCounter
        this.scoreElement = containerElement.querySelector(".score");
        this.containerElement = containerElement;
        containerElement.querySelector("h2").innerText = name
        containerElement.querySelector("#add").addEventListener("click", () => this.add())
        containerElement.querySelector("#substract").addEventListener("click", () => this.substract())
        this.updateScore();
    }

    add(amount = 1){
        this.score += amount;
        this.updateScore();
    }

    substract(amount = 1){
        this.score = Math.max(0, this.score - amount)
        this.updateScore();
    }

    reset(){
        this.score = 0;
        this.updateScore();
    }

    updateScore(){
        console.log(this.score, this.name); 
        const actualGroups = this.containerElement.querySelectorAll(".group");

        if (actualGroups.length > 0) {actualGroups.forEach(el => { this.scoreElement.removeChild(el)})};
        
        let actualGroup;
        for(let i = 0; i < this.score; i++){
            if (i % 5 === 0) {
                actualGroup = document.createElement("div");
                actualGroup.classList.add("group");
                this.scoreElement.appendChild(actualGroup);
            }
            const newMatch = document.createElement("img");
            newMatch.src = "assets/fosforoRef.png";
            newMatch.classList.add("match" + i % 5);
            actualGroup.appendChild(newMatch)
        }
    }
}
const snakeDatabase = [{
    name: "Cobra",
    kingdom: "Animalia",
    phylum: "Reptilia",
    order: "Squamata",
    suborder: "Serpentes",
    venom: "This species is capable of delivering a fatal bite and the victim may receive a large quantity of venom with a dose of 200 to 500 mg up to 7 ml.<br> The toxins affect the victim's central nervous system, resulting in severe pain, blurred vision, vertigo, drowsiness, and eventually paralysis. If the envenomation is serious, it progresses to cardiovascular collapse, and the victim falls into a coma. Death soon follows due to respiratory failure."
},
{
    name: "Cobra2",
    kingdom: "Animalia",
    phylum: "Reptilia",
    order: "Squamata",
    suborder: "Serpentes",
    venom: "This species is capable of delivering a fatal bite and the victim may receive a large quantity of venom with a dose of 200 to 500 mg up to 7 ml.<br> The toxins affect the victim's central nervous system, resulting in severe pain, blurred vision, vertigo, drowsiness, and eventually paralysis. If the envenomation is serious, it progresses to cardiovascular collapse, and the victim falls into a coma. Death soon follows due to respiratory failure."
},
{
    name: "Cobra2",
    kingdom: "Animalia",
    phylum: "Reptilia",
    order: "Squamata",
    suborder: "Serpentes",
    venom: "This species is capable of delivering a fatal bite and the victim may receive a large quantity of venom with a dose of 200 to 500 mg up to 7 ml.<br> The toxins affect the victim's central nervous system, resulting in severe pain, blurred vision, vertigo, drowsiness, and eventually paralysis. If the envenomation is serious, it progresses to cardiovascular collapse, and the victim falls into a coma. Death soon follows due to respiratory failure."
}]

class SnakeList{
    constructor(parentElement, snakesData){
        this.parentElement = parentElement;
        this.snakesData = snakesData;
        this.constructSnakeList();
        this.constructSnakeInfo();

    }
    constructSnakeList(){
        const snakeList = this.parentElement.querySelector(".snake-list");
        const snakeListComponent = document.createElement("div");
        const snakeListHeading = document.createElement("h2");
        snakeListComponent.classList.add("snake-list-component");
        snakeListHeading.textContent = "Snakes";
        snakeList.appendChild(snakeListHeading);
        snakeList.appendChild(snakeListComponent);
        this.createAnchors();
    }
    constructSnakeInfo(){
        const snakeInfo = this.parentElement.querySelector(".snake-info");
        const snakeInfoComponent = document.createElement("div");
        const snakeInfoHeading = document.createElement("h2");
        snakeInfoComponent.classList.add("snake-info-component");
        snakeInfoHeading.textContent = "Facts"
        snakeInfo.appendChild(snakeInfoHeading)
        snakeInfo.appendChild(snakeInfoComponent)
    }
    createAnchors(){
        this.snakeAnchors = this.snakesData.forEach(snake => {
            document.createElement("a")
            snake.textContent = this.snakesData.name;
            
        });
    }
}
class SnakeInfo{
    constructor(data){

    }
}
const parentElement = document.querySelector(".main-content")
const sneks = new SnakeList(parentElement, snakeDatabase)
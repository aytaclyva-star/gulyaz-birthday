function showMessage() {

    document.getElementById("message").style.display = "block";

    createFlowers();

}

function createFlowers() {

    for (let i = 0; i < 40; i++) {

        const flower = document.createElement("div");

        flower.className = "flower";
        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (3 + Math.random() * 3) + "s";
        flower.style.fontSize = (20 + Math.random() * 20) + "px";

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 6000);

    }

}

const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const giftBtn = document.getElementById("giftBtn");
const gift = document.getElementById("gift");

startBtn.addEventListener("click", function () {

    document.querySelector(".container").style.display = "none";

    surprise.classList.remove("hidden");

});


giftBtn.addEventListener("click", function () {

    surprise.style.display = "none";

    gift.classList.remove("hidden");

    createFlowers();

});


function createFlowers() {

    for (let i = 0; i < 30; i++) {

        let flower = document.createElement("div");

        flower.innerHTML = "🌸";

        flower.style.position = "fixed";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.top = "-20px";
        flower.style.fontSize = "25px";
        flower.style.animation = "fall 4s linear";

        document.body.appendChild(flower);


        setTimeout(() => {
            flower.remove();
        }, 4000);

    }

}

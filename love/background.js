var reasonsiloveyou = [
    "your eyes, they're gorgeous",
    "your hair, it's actually the prettiest i've ever seen",
    "your style",
    "your personality",
    "your voice",
    "your name",
    "your energy",
    "your face",
    "that you love me somehow?!?!",
    "i can be myself with you",
    "your humor",
    "your kindness",
    "you're smart",
    "YOU'RE SO PRETTY😻",
    "you make the world a little less scary",
    "you're there for me",
    "you're so cuteee",
    "your hugs would probably be the best feeling in the world",
    "i could listen to you talk about anything forever",
]
console.log("hey theree :>")
console.log("current list: " + reasonsiloveyou.length)

// Randomize reasonsiloveyou so it looks different every time :>
for (var i = reasonsiloveyou.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = reasonsiloveyou[i];
    reasonsiloveyou[i] = reasonsiloveyou[j];
    reasonsiloveyou[j] = temp;
}

document.addEventListener('DOMContentLoaded', () => {
    function GetReason(i) {
        if (reasonsiloveyou[i]) {
            return reasonsiloveyou[i]
        } else {
            return "uhh something went wrong, sorry bout that ;-;"
        }
    }

    var buttoncontainer = document.body.querySelector("main").querySelector(".button-container");

    for (var i = 0; i < buttoncontainer.children.length; i++) {
        let button = buttoncontainer.children.item(i)
        button.addEventListener("click", function() {
            button.classList.toggle('clicked')
        })
        let message = button.querySelector(".heartbutton-inner").querySelector(".heartbutton-back")
        message.textContent = GetReason(i)
    }
})

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.querySelector("particles").appendChild(bubble);
    setTimeout(() => bubble.remove(), 8000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 4 + 6 + 's';
    document.body.querySelector("particles").appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.querySelector("particles").appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}

setInterval(createBubble, 900);
createBubble()
createHeart()
setInterval(createHeart, 1100);
setInterval(createSparkle, 250);

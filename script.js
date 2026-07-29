const intro = document.getElementById("intro");

const intro_church = document.getElementById("intro_church");
const shakeSound = document.getElementById("shakeSound");
const angelSound = document.getElementById("angelSound");
const hellSound = document.getElementById("hellSound");
const limboSound = document.getElementById("limboSound");
const doomed = document.getElementById("doomed");
const huh = document.getElementById("huh");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const game = document.getElementById("game");

const answers = [
    "Heaven",
    "Hell",
    "Limbo"
];

const ball = document.getElementById("ball");
const answer = document.getElementById("answer");

// ----------------------
// Audio Setup
// ----------------------

const allAudio = [
    intro_church,
    shakeSound,
    angelSound,
    hellSound,
    limboSound,
    doomed,
    huh
];

let audioUnlocked = false;
let introStarted = false;

function unlockAudio() {

    if (audioUnlocked) return;

    audioUnlocked = true;

    allAudio.forEach(audio => {

        audio.load();

        audio.muted = true;

        audio.play()
            .then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.muted = false;
            })
            .catch(() => {});

    });

    intro_church.volume = 0.4;
}

function startIntro() {

    if (introStarted) return;

    introStarted = true;

    intro_church.currentTime = 0;

    intro_church.play().catch(() => {});

    // Show Line 1
    line1.style.opacity = 1;

    // Hide Line 1
    setTimeout(() => {
        line1.style.opacity = 0;
    }, 2500);

    // Show Line 2
    setTimeout(() => {

        line1.style.display = "none";

        line2.classList.remove("hidden");
        line2.style.opacity = 1;

    }, 4000);

    // Hide Line 2
    setTimeout(() => {

        line2.style.opacity = 0;

    }, 6500);

    // Show Line 3
    setTimeout(() => {

        line2.style.display = "none";

        line3.classList.remove("hidden");
        line3.style.opacity = 1;

    }, 8000);

    // Hide Line 3
    setTimeout(() => {

        line3.style.opacity = 0;

    }, 10500);

    // Reveal the Magic 8 Ball
    setTimeout(() => {

        intro.style.display = "none";

        game.classList.remove("hidden");

        setTimeout(() => {

            game.classList.add("show");
            document.getElementById("stars").classList.add("visible");

        }, 100);

    }, 12000);

}

function firstInteraction() {

    unlockAudio();

    startIntro();

}

document.addEventListener("click", firstInteraction, { once: true });
document.addEventListener("touchstart", firstInteraction, { once: true });



// ---------------------- 
// Limbo Scene Function 
// ----------------------
function startLimboScene(){

    const scene = document.getElementById("limboScene");

    const topText = document.getElementById("limboTop");

    const bottomText = document.getElementById("limboBottom");

    const message1 = document.getElementById("limboMessage1");

    const message2 = document.getElementById("limboMessage2");


    scene.classList.remove("hidden");
    document
    .getElementById("limboFog")
    .classList.add("limboFogActive");



    // First judgment

    setTimeout(()=>{

        topText.classList.add("limboFade");

        bottomText.classList.add("limboFade");

    },2000);



    // Remove first messages

    setTimeout(()=>{

        topText.style.opacity=0;

        bottomText.style.opacity=0;

    },6000);



    // Clothing message

    setTimeout(()=>{

        message1.classList.add("limboFade");

    },7000);



    setTimeout(()=>{

        message1.style.opacity=0;

    },11000);



    // Final eternity message

    setTimeout(()=>{

        message2.classList.add("limboFade");

    },12000);

}


// ---------------------- 
// Hell Scene Function 
// ----------------------
function startHellScene(){

    const scene = document.getElementById("hellScene");

    const topText = document.getElementById("hellTop");

    const bottomText = document.getElementById("hellBottom");

    const message1 = document.getElementById("hellMessage1");

    const message2 = document.getElementById("hellMessage2");


    scene.classList.remove("hidden");


    // First judgment text

    setTimeout(()=>{

        topText.classList.add("hellFade");

        bottomText.classList.add("hellFade");

    },2000);



    // Remove first lines

    setTimeout(()=>{

        topText.style.opacity=0;

        bottomText.style.opacity=0;

    },6000);



    // Clothing message

    setTimeout(()=>{

        message1.classList.add("hellFade");

    },7000);



    setTimeout(()=>{

        message1.style.opacity=0;

    },11000);



    // Final eternity message

    setTimeout(()=>{

        message2.classList.add("hellFade");

    },12000);

}

// ----------------------
// Heaven Scene Function
// ----------------------
function startHeavenScene(){

    const scene = document.getElementById("heavenScene");

    const light = document.getElementById("heavenLight");

    const topText = document.getElementById("heavenTop");

    const bottomText = document.getElementById("heavenBottom");

    const message1 = document.getElementById("heavenMessage1");

    const message2 = document.getElementById("heavenMessage2");


    scene.classList.remove("hidden");

    light.classList.add("heavenBeam");


    // First two messages

    setTimeout(()=>{

        topText.classList.add("heavenFade");

        bottomText.classList.add("heavenFade");

    },2000);


    // Remove them

    setTimeout(()=>{

        topText.style.opacity=0;

        bottomText.style.opacity=0;

    },6000);



    // Celebration message

    setTimeout(()=>{

        message1.classList.add("heavenFade");

    },7000);



    setTimeout(()=>{

        message1.style.opacity=0;

    },11000);



    // Final message

    setTimeout(()=>{

        message2.classList.add("heavenFade");

    },12000);

}
// ----------------------
// Ball Click
// ----------------------

ball.addEventListener("click", () => {

    shakeSound.currentTime = 0;
    shakeSound.play().catch(() => {});

    ball.animate(
        [
            { transform: "rotate(0deg)" },
            { transform: "rotate(-8deg)" },
            { transform: "rotate(8deg)" },
            { transform: "rotate(-6deg)" },
            { transform: "rotate(6deg)" },
            { transform: "rotate(0deg)" }
        ],
        {
            duration: 700,
            iterations: 1
        }
    );

    answer.textContent = "...";

    setTimeout(() => {

        const randomIndex = Math.floor(Math.random() * answers.length);
        const result = answers[randomIndex];

        answer.textContent = result;

        // Stop all previous sounds
        [
            angelSound,
            hellSound,
            limboSound,
            doomed,
            huh
        ].forEach(audio => {

            audio.pause();
            audio.currentTime = 0;

        });

        if(result === "Heaven"){

            angelSound.volume = .7;

            angelSound.play().catch(() => {});

            startHeavenScene();

        }

        else if(result === "Hell"){

            hellSound.volume = .8;

            hellSound.play().catch(() => {});

            setTimeout(() => {

                doomed.volume = .7;

                doomed.play().catch(() => {});

            },2000);

            startHellScene();

        }

        else{

            limboSound.volume = .5;

            limboSound.play().catch(() => {});

            huh.volume = .7;

            huh.play().catch(() => {});

            startLimboScene();

        }

    },1200);

});





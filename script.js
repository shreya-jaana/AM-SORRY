/* ==========================================================
   FOR MY SARIB 💗
   SCRIPT.JS - PART 1
   ========================================================== */

/* ==========================================================
   ELEMENTS
   ========================================================== */

const phases = document.querySelectorAll(".phase");
const nextButtons = document.querySelectorAll(".next-phase");
const dots = document.querySelectorAll(".dot");

const transitionOverlay =
document.getElementById("transition-overlay");

const particleContainer =
document.getElementById("particle-container");

const confettiContainer =
document.getElementById("confetti-container");

const musicBtn =
document.getElementById("musicToggle");

const bgMusic =
document.getElementById("bgMusic");

/* ==========================================================
   AUDIO
   ========================================================== */

/*
    INSERT YOUR AUDIO FILE HERE

    Example:

    bgMusic.src =
    "music/love-song.mp3";

*/

let musicPlaying = false;

/* ==========================================================
   CURRENT PHASE
   ========================================================== */

let currentPhase = 0;

/* ==========================================================
   TYPEWRITER CONTENT
   ========================================================== */

const spaghettiLetter = [

"We were with my female friends.",
"All girls. Just us.",
"The room was really hot that day.",
"And I was wearing a spaghetti top under my outer layer.",
"In the heat of the moment ... literally ... I removed my top.",
"In front of them.",
"It wasn't intentional.",
"It wasn't planned.",
"These were all girls. My friends.",
"And in that moment I just... didn't think twice.",
"But I should have.",
"Because even if it felt harmless to me ...",
"I know it didn't feel that way to you.",
"And you deserve to be considered. Always.",
"So yes. I agree. That was a mistake.",
"I own it completely.",
"I hate that it happened.",
"You deserve better from me.",

"And just so you know ... I told you the moment I could. Without hesitation. Without hiding it. Because that's what I do. I tell you everything. I just didn't expect you to be hurt by it. But now that I know ... I'll be more careful."

];

/* ==========================================================
   FORGIVE METER DATA
   ========================================================== */

const meterMessages = {

10 : "Oh... he actually pressed it 👀",

20 : "He's thinking about it... 🥺",

30 : "Something is softening in there... 💙",

40 : "Halfway to forgiveness 😭",

50 : "He's coming around omg 🎉",

60 : "I can feel it... 💗",

70 : "The walls are coming down 🌸",

80 : "Almost there... please 😍",

90 : "ONE MORE PRESS JAANA 😭💗",

100 : "HE FORGAVE ME 😭💗🎉"

};

/* ==========================================================
   HELPERS
   ========================================================== */

function hideAllPhases(){

    phases.forEach(phase => {

        phase.classList.remove("active");

    });

}

function updateDots(index){

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    if(dots[index]){

        dots[index].classList.add("active");

    }

}

function goToPhase(index){

    hideAllPhases();

    phases[index].classList.add("active");

    currentPhase = index;

    updateDots(index);

    triggerPhaseAnimations(index);

}

/* ==========================================================
   TRANSITIONS
   ========================================================== */

function runTransition(type){

    transitionOverlay.classList.remove(
        "overlay-active"
    );

    void transitionOverlay.offsetWidth;

    transitionOverlay.classList.add(
        "overlay-active"
    );

    const wrapper =
    document.getElementById("phaseWrapper");

    wrapper.classList.remove(
        "shatter",
        "page-flip",
        "curtain-drop",
        "star-burst"
    );

    void wrapper.offsetWidth;

    wrapper.classList.add(type);

    setTimeout(()=>{

        wrapper.classList.remove(type);

    },1200);

}

/* ==========================================================
   PHASE BUTTONS
   ========================================================== */

nextButtons.forEach(button => {

    button.addEventListener("click",()=>{

        const next =
        Number(
            button.dataset.next
        );

        if(currentPhase === 0){

            runTransition("shatter");

        }

        else if(currentPhase === 1){

            runTransition("page-flip");

        }

        else if(currentPhase === 2){

            runTransition("curtain-drop");

        }

        else if(currentPhase === 3){

            runTransition("star-burst");

        }

        setTimeout(()=>{

            goToPhase(next);

        },500);

    });

});

/* ==========================================================
   DOT NAVIGATION
   ========================================================== */

dots.forEach(dot => {

    dot.addEventListener("click",()=>{

        const phase =
        Number(
            dot.dataset.phase
        );

        goToPhase(phase);

    });

});

/* ==========================================================
   MUSIC TOGGLE
   ========================================================== */

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play();

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

    }

    else{

        bgMusic.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "🔇";

    }

});

/* ==========================================================
   POPUPS
   ========================================================== */

const hiddenTriggers =
document.querySelectorAll(
".hidden-trigger"
);

const closeButtons =
document.querySelectorAll(
".close-popup"
);

hiddenTriggers.forEach(trigger=>{

    trigger.addEventListener("click",()=>{

        const popupId =
        trigger.dataset.popup;

        const popup =
        document.getElementById(
            popupId
        );

        popup.classList.add("show");

    });

});

closeButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.closest(
            ".popup-overlay"
        ).classList.remove(
            "show"
        );

    });

});

document
.querySelectorAll(".popup-overlay")
.forEach(overlay=>{

    overlay.addEventListener(
        "click",
        (e)=>{

            if(
                e.target === overlay
            ){

                overlay.classList.remove(
                    "show"
                );

            }

        }
    );

});

/* ==========================================================
   ENVELOPE OPENING
   ========================================================== */

const envelopeOne =
document.getElementById(
    "envelopeOne"
);

const typewriterLetter =
document.getElementById(
    "typewriterLetter"
);

let typewriterStarted =
false;

if(envelopeOne){

    envelopeOne.addEventListener(
        "click",
        ()=>{

            if(typewriterStarted)
                return;

            typewriterStarted = true;

            envelopeOne.classList.add(
                "open"
            );

            setTimeout(()=>{

                typewriterLetter.classList
                .remove("hidden");

                startTypewriter();

            },600);

        }
    );

}

/* ==========================================================
   TYPEWRITER START
   ========================================================== */

function startTypewriter(){

    let index = 0;

    function addLine(){

        if(
            index >=
            spaghettiLetter.length
        ){
            return;
        }

        const p =
        document.createElement("p");

        p.className =
        "type-line";

        p.textContent =
        spaghettiLetter[index];

        typewriterLetter
        .appendChild(p);

        index++;

        setTimeout(
            addLine,
            800
        );

    }

    addLine();

}

/* ==========================================================
   LINE BY LINE FADE
   ========================================================== */

function animateLines(section){

    const lines =
    section.querySelectorAll(
        ".line"
    );

    lines.forEach(
        (line,index)=>{

            setTimeout(()=>{

                line.classList.add(
                    "show"
                );

            }, index * 400);

        }
    );

}
/* ==========================================================
   PHASE ANIMATION TRIGGERS
   ========================================================== */

function triggerPhaseAnimations(index){

    const activePhase =
    phases[index];

    if(!activePhase) return;

    animateLines(activePhase);

    if(index === 2){

        if(typewriterLetter){

            typewriterLetter.innerHTML = "";

        }

        typewriterStarted = false;

        if(envelopeOne){

            envelopeOne.classList.remove(
                "open"
            );
        }

    }

}

/* ==========================================================
   PARTICLE ENGINE
   ========================================================== */

const particleSymbols = [

"💗",
"✨",
"⭐",
"💖",
"🌸"

];

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add(
        "particle"
    );

    particle.innerHTML =
    particleSymbols[
        Math.floor(
            Math.random() *
            particleSymbols.length
        )
    ];

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.fontSize =
    (
        Math.random() * 18 + 12
    ) + "px";

    particle.style.animationDuration =
    (
        Math.random() * 10 + 10
    ) + "s";

    particle.style.opacity =
    Math.random();

    particleContainer.appendChild(
        particle
    );

    setTimeout(()=>{

        particle.remove();

    },22000);

}

setInterval(
    createParticle,
    450
);

/* ==========================================================
   FLOATING HEARTS
   ========================================================== */

function spawnHeart(x,y){

    const heart =
    document.createElement("div");

    heart.className =
    "floating-heart";

    heart.innerHTML =
    ["💗","💕","💖","💘"][
        Math.floor(
            Math.random()*4
        )
    ];

    heart.style.left =
    x + "px";

    heart.style.top =
    y + "px";

    heart.style.fontSize =
    (
        Math.random()*16 + 20
    ) + "px";

    document.body.appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },3000);

}

/* ==========================================================
   HEART BURST
   ========================================================== */

function createHeartBurst(){

    for(let i=0;i<5;i++){

        const heart =
        document.createElement("div");

        heart.className =
        "heart-pop";

        heart.innerHTML =
        ["💗","💖","💕","💘"][
            Math.floor(
                Math.random()*4
            )
        ];

        heart.style.left =
        (
            window.innerWidth/2
            +
            (Math.random()*120-60)
        ) + "px";

        heart.style.bottom =
        "120px";

        heart.style.fontSize =
        (
            Math.random()*15+20
        ) + "px";

        document.body.appendChild(
            heart
        );

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}

/* ==========================================================
   FORGIVE METER
   ========================================================== */

const forgiveBtn =
document.getElementById(
    "forgiveBtn"
);

const meterFill =
document.getElementById(
    "meterFill"
);

const meterPercent =
document.getElementById(
    "meterPercent"
);

const meterMessage =
document.getElementById(
    "meterMessage"
);

let meterValue = 0;

if(forgiveBtn){

    forgiveBtn.addEventListener(
        "click",
        ()=>{

            if(
                meterValue >= 100
            ){
                return;
            }

            meterValue += 10;

            meterFill.style.height =
            meterValue + "%";

            meterPercent.textContent =
            meterValue + "%";

            meterMessage.textContent =
            meterMessages[
                meterValue
            ];

            createHeartBurst();

            if(
                meterValue === 100
            ){

                setTimeout(()=>{

                    unlockCelebration();

                },700);

            }

        }
    );

}

/* ==========================================================
   EXTRA HEARTS ON TOUCH
   ========================================================== */

document.addEventListener(
    "click",
    (e)=>{

        if(
            currentPhase !== 4
        ) return;

        spawnHeart(
            e.clientX,
            e.clientY
        );

    }
);

/* ==========================================================
   CONFETTI ENGINE
   ========================================================== */

function createConfettiPiece(){

    const piece =
    document.createElement("div");

    piece.className =
    "confetti";

    const confettiSet = [

        "🎉",
        "✨",
        "💗",
        "🌸",
        "💖"

    ];

    piece.innerHTML =
    confettiSet[
        Math.floor(
            Math.random() *
            confettiSet.length
        )
    ];

    piece.style.left =
    Math.random()*100 + "%";

    piece.style.fontSize =
    (
        Math.random()*18 + 18
    ) + "px";

    piece.style.animationDuration =
    (
        Math.random()*3 + 4
    ) + "s";

    confettiContainer
    .appendChild(piece);

    setTimeout(()=>{

        piece.remove();

    },7000);

}

function launchConfetti(amount){

    for(
        let i = 0;
        i < amount;
        i++
    ){

        setTimeout(()=>{

            createConfettiPiece();

        },i * 50);

    }

}

/* ==========================================================
   CONTINUOUS CELEBRATION CONFETTI
   ========================================================== */

let celebrationLoop =
null;

function startConfettiRain(){

    if(
        celebrationLoop
    ){
        clearInterval(
            celebrationLoop
        );
    }

    celebrationLoop =
    setInterval(()=>{

        launchConfetti(10);

    },800);

}
/* ==========================================================
   CELEBRATION UNLOCK
   ========================================================== */

const finalCelebration =
document.getElementById(
    "finalCelebration"
);

const finalEnvelope =
document.getElementById(
    "finalEnvelope"
);

const finalLetterPopup =
document.getElementById(
    "finalLetterPopup"
);

function unlockCelebration(){

    document.body.classList.add(
        "celebration-mode"
    );

    launchConfetti(120);

    startConfettiRain();

    if(finalCelebration){

        finalCelebration.classList
        .remove("hidden");

        finalCelebration.classList
        .add("fade-in");

    }

    createMegaHeartExplosion();

    activateCornerGIFCelebration();

}

if(finalEnvelope){

    finalEnvelope.addEventListener(
        "click",
        ()=>{

            finalLetterPopup.classList
            .add("show");

        }
    );

}

/* ==========================================================
   MEGA HEART EXPLOSION
   ========================================================== */

function createMegaHeartExplosion(){

    const total = 60;

    for(
        let i = 0;
        i < total;
        i++
    ){

        setTimeout(()=>{

            const heart =
            document.createElement(
                "div"
            );

            heart.className =
            "floating-heart";

            heart.innerHTML =
            [
                "💗",
                "💖",
                "💕",
                "💘",
                "🌸",
                "✨"
            ][
                Math.floor(
                    Math.random()*6
                )
            ];

            heart.style.left =
            (
                window.innerWidth/2
                +
                (
                    Math.random()*500
                    -250
                )
            ) + "px";

            heart.style.top =
            (
                window.innerHeight/2
                +
                (
                    Math.random()*300
                    -150
                )
            ) + "px";

            heart.style.fontSize =
            (
                Math.random()*22+18
            ) + "px";

            document.body
            .appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },3000);

        },i*25);

    }

}

/* ==========================================================
   CORNER GIF CELEBRATION
   ========================================================== */

function activateCornerGIFCelebration(){

    const phase4 =
    document.getElementById(
        "phase4"
    );

    if(!phase4) return;

    const gifs = [

"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnloNmRwZTNscGpndDltZXhyNHB1a2o3NXRsZDVweXd5dW53Y2E2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fxU6WfJ8eembhmZBC6/giphy.gif",

"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGgxMWZ3NWxyZXN5bTBkOHV5dTJteW5rNWNiM2F2d3lmc3U3amdmNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jhIK0Mx3aZTPgvkPWh/giphy.gif"

    ];

    gifs.forEach((src,index)=>{

        const img =
        document.createElement("img");

        img.src = src;

        img.className =
        "corner-gif";

        if(index === 0){

            img.style.left =
            "10px";

            img.style.top =
            "10px";

        }

        else{

            img.style.right =
            "10px";

            img.style.bottom =
            "10px";

            img.style.top =
            "auto";

        }

        phase4.appendChild(img);

    });

}

/* ==========================================================
   TOUCH SUPPORT
   ========================================================== */

document.addEventListener(
    "touchstart",
    (e)=>{

        const touch =
        e.touches[0];

        if(!touch) return;

        if(
            currentPhase === 4
        ){

            spawnHeart(
                touch.clientX,
                touch.clientY
            );

        }

    },
    {
        passive:true
    }
);

/* ==========================================================
   AUTO LINE ANIMATION OBSERVER
   ========================================================== */

function animateVisibleLines(){

    const lines =
    document.querySelectorAll(
        ".line"
    );

    lines.forEach(
        (line,index)=>{

            setTimeout(()=>{

                line.classList.add(
                    "show"
                );

            },index * 350);

        }
    );

}

/* ==========================================================
   PHASE ENTRANCE EFFECT
   ========================================================== */

function animatePhaseEntrance(){

    const active =
    document.querySelector(
        ".phase.active"
    );

    if(!active) return;

    const elements =
    active.querySelectorAll(
`
h1,
h2,
h3,
p,
img,
button,
.solution-box,
.letter-box,
.comic-card,
.flip-card
`
    );

    elements.forEach(
        (element,index)=>{

            element.style.opacity =
            "0";

            element.style.transform =
            "translateY(20px)";

            setTimeout(()=>{

                element.style.transition =
                "all .7s ease";

                element.style.opacity =
                "1";

                element.style.transform =
                "translateY(0)";

            },index * 80);

        }
    );

}

/* ==========================================================
   PHASE CHANGE OVERRIDE
   ========================================================== */

const originalGoToPhase =
goToPhase;

goToPhase = function(index){

    originalGoToPhase(index);

    setTimeout(()=>{

        animatePhaseEntrance();

    },100);

};

/* ==========================================================
   SPARKLE TRAIL
   ========================================================== */

function createSparkleTrail(x,y){

    const sparkle =
    document.createElement(
        "div"
    );

    sparkle.className =
    "floating-heart";

    sparkle.innerHTML =
    "✨";

    sparkle.style.left =
    x + "px";

    sparkle.style.top =
    y + "px";

    sparkle.style.fontSize =
    (
        Math.random()*10 + 14
    ) + "px";

    document.body
    .appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

document.addEventListener(
    "mousemove",
    (e)=>{

        if(
            window.innerWidth < 768
        ) return;

        if(
            Math.random() > .92
        ){

            createSparkleTrail(
                e.clientX,
                e.clientY
            );

        }

    }
);

/* ==========================================================
   RANDOM LOVE MESSAGES
   ========================================================== */

const loveMessages = [

"💗 I miss you.",
"🥺 Please stay.",
"🌸 You're my favorite person.",
"💖 Come back to me.",
"✨ You mean everything.",
"💕 Still choosing you.",
"💘 Always us."

];

function spawnLoveMessage(){

    if(
        currentPhase !== 4
    ) return;

    const msg =
    document.createElement(
        "div"
    );

    msg.className =
    "floating-message";

    msg.textContent =
    loveMessages[
        Math.floor(
            Math.random() *
            loveMessages.length
        )
    ];

    msg.style.position =
    "fixed";

    msg.style.left =
    (
        Math.random()*70+10
    ) + "%";

    msg.style.top =
    (
        Math.random()*60+15
    ) + "%";

    msg.style.zIndex =
    "600";

    document.body
    .appendChild(msg);

    setTimeout(()=>{

        msg.remove();

    },8000);

}

setInterval(
    spawnLoveMessage,
    9000
);
/* ==========================================================
   PARTICLE PRELOAD
   ========================================================== */

function preloadParticles(){

    for(
        let i = 0;
        i < 25;
        i++
    ){

        setTimeout(()=>{

            createParticle();

        },i * 120);

    }

}

/* ==========================================================
   MOBILE VIEWPORT FIX
   ========================================================== */

function updateViewportHeight(){

    const vh =
    window.innerHeight * 0.01;

    document.documentElement
    .style.setProperty(
        "--vh",
        `${vh}px`
    );

}

updateViewportHeight();

window.addEventListener(
    "resize",
    updateViewportHeight
);

window.addEventListener(
    "orientationchange",
    updateViewportHeight
);

/* ==========================================================
   GIF LOAD SAFETY
   ========================================================== */

function checkGifLoading(){

    const gifs =
    document.querySelectorAll(
        "img"
    );

    gifs.forEach(img=>{

        img.addEventListener(
            "error",
            ()=>{

                img.style.opacity =
                ".4";

                console.warn(
                    "GIF failed to load:",
                    img.src
                );

            }
        );

    });

}

checkGifLoading();

/* ==========================================================
   RESET PHASE STATE
   ========================================================== */

function resetPhaseState(index){

    if(index !== 2) return;

    if(typewriterLetter){

        typewriterLetter.innerHTML =
        "";

    }

    typewriterStarted = false;

    if(envelopeOne){

        envelopeOne.classList.remove(
            "open"
        );

    }

}

/* ==========================================================
   PHASE REVISIT SUPPORT
   ========================================================== */

dots.forEach(dot=>{

    dot.addEventListener(
        "click",
        ()=>{

            const phaseIndex =
            Number(
                dot.dataset.phase
            );

            resetPhaseState(
                phaseIndex
            );

        }
    );

});

/* ==========================================================
   HEART RAIN
   ========================================================== */

function heartRain(){

    if(
        currentPhase !== 4
    ) return;

    const heart =
    document.createElement(
        "div"
    );

    heart.className =
    "floating-heart";

    heart.innerHTML =
    [
        "💗",
        "💕",
        "💖",
        "🌸"
    ][
        Math.floor(
            Math.random()*4
        )
    ];

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.top =
    "-20px";

    heart.style.fontSize =
    (
        Math.random()*12 + 18
    ) + "px";

    document.body
    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3500);

}

setInterval(
    heartRain,
    700
);

/* ==========================================================
   AUTO GLOW PULSE
   ========================================================== */

function pulseButtons(){

    const buttons =
    document.querySelectorAll(
        ".glow-btn"
    );

    buttons.forEach(btn=>{

        btn.addEventListener(
            "touchstart",
            ()=>{

                btn.style.transform =
                "scale(.96)";

            }
        );

        btn.addEventListener(
            "touchend",
            ()=>{

                btn.style.transform =
                "";

            }
        );

    });

}

pulseButtons();

/* ==========================================================
   FIRST PHASE STARTUP
   ========================================================== */

function startupSequence(){

    preloadParticles();

    updateDots(0);

    animateVisibleLines();

    animatePhaseEntrance();

}

startupSequence();

/* ==========================================================
   FORCE FIRST PHASE ACTIVE
   ========================================================== */

if(phases.length){

    phases.forEach(
        (phase,index)=>{

            if(index === 0){

                phase.classList.add(
                    "active"
                );

            }

            else{

                phase.classList.remove(
                    "active"
                );

            }

        }
    );

}

/* ==========================================================
   PERFORMANCE CLEANUP
   ========================================================== */

setInterval(()=>{

    const particles =
    document.querySelectorAll(
        ".particle"
    );

    if(
        particles.length > 120
    ){

        for(
            let i = 0;
            i < 20;
            i++
        ){

            if(
                particles[i]
            ){

                particles[i].remove();

            }

        }

    }

},15000);

/* ==========================================================
   KEYBOARD SUPPORT
   ========================================================== */

document.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key === "ArrowRight"
        ){

            if(
                currentPhase < 4
            ){

                goToPhase(
                    currentPhase + 1
                );

            }

        }

        if(
            e.key === "ArrowLeft"
        ){

            if(
                currentPhase > 0
            ){

                goToPhase(
                    currentPhase - 1
                );

            }

        }

        if(
            e.key === "Escape"
        ){

            document
            .querySelectorAll(
                ".popup-overlay.show"
            )
            .forEach(popup=>{

                popup.classList.remove(
                    "show"
                );

            });

        }

    }
);

/* ==========================================================
   FINAL MESSAGE
   ========================================================== */

console.log(
`
💗 ===================================== 💗

If you're reading this...

She really tried.

Maybe forgive her? 🥺

💗 ===================================== 💗
`
);

/* ==========================================================
   END OF SCRIPT.JS
   ========================================================== */

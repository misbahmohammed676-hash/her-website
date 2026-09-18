function checkPassword() {
    const password = document.querySelector("#password-input").value;
    const message = document.querySelector("#password-message");

    if (password === "1923") {
        document.querySelector("#password-screen").style.display = "none";
        document.querySelector(".container").style.display = "block";
    } else {
        message.textContent = "Wrong password 😭 Try again!";
    }
}
function openEnvelope() {
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const heart = document.querySelector(".heart");
    const button = document.querySelector(".continue-btn");

    flap.style.transform = "rotateX(180deg)";
    letter.style.transform = "translateY(-80px)";
    heart.style.opacity = "0";

    setTimeout(() => {
        button.style.display = "inline-block";
    }, 800);
}

function showBirthday() {
    document.querySelector(".container").style.display = "none";
    document.querySelector("#birthday-page").style.display = "flex";
}

function nextSection() {
    document.querySelector("#birthday-page").style.setProperty("display", "none", "important");
    document.querySelector("#letter-section").style.setProperty("display", "block", "important");
}

function showMemories() {
    document.querySelector("#letter-section").style.setProperty("display", "none", "important");
    document.querySelector("#memories-section").style.setProperty("display", "block", "important");
}
function showMemory2() {
    document.querySelector("#memory1").style.display = "none";
    document.querySelector("#memory2").style.display = "block";
}

function showMemory3() {
    document.querySelector("#memory2").style.display = "none";
    document.querySelector("#memory3").style.display = "block";
}
function showVideo() {
    document.querySelector("#memories-section").style.setProperty("display", "none", "important");
    document.querySelector("#video-section").style.setProperty("display", "block", "important");
}
function finalSurprise() {
    document.querySelector("#video-section").style.setProperty("display", "none", "important");
    document.querySelector("#final-section").style.setProperty("display", "block", "important");
}
let currentMemory = 0;

function nextMemory() {
    const memories = document.querySelectorAll(".memory-slide");

    memories[currentMemory].classList.remove("active");

    currentMemory++;

    if (currentMemory < memories.length) {
        memories[currentMemory].classList.add("active");
    }
}
function hideAllMemories() {
    document.querySelectorAll(".memory-slide").forEach(function(memory) {
        memory.classList.remove("active");
    });
}

function showMemory2() {
    hideAllMemories();
    document.querySelector("#memory2").classList.add("active");
}

function showMemory3() {
    hideAllMemories();
    document.querySelector("#memory3").classList.add("active");
}

function showMemory4() {
    hideAllMemories();
    document.querySelector("#memory4").classList.add("active");
}

function showMemory5() {
    hideAllMemories();
    document.querySelector("#memory5").classList.add("active");
}

function showMemory6() {
    hideAllMemories();
    document.querySelector("#memory6").classList.add("active");
}

function showMemory7() {
    hideAllMemories();
    document.querySelector("#memory7").classList.add("active");
}

function showMemory8() {
    hideAllMemories();
    document.querySelector("#memory8").classList.add("active");
}

function showMemory9() {
    hideAllMemories();
    document.querySelector("#memory9").classList.add("active");
}
const texts = [
    "inovate",
    "learn new things.",
    "be a better developers",
    "solve problems"
];
const speed = 100; // Velocidade de digitação (milissegundos)
const pause = 2000; // Pausa antes de apagar (milissegundos)
let textIndex = 0;
let charIndex = 0;
let isAdding = true;

const typewriter = document.getElementById('typewriter');

function type() {
    const currentText = texts[textIndex];
    
    if (isAdding) {
        if (charIndex < currentText.length) {
            typewriter.innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            isAdding = false;
            setTimeout(type, pause);
        }
    } else {
        if (charIndex > 0) {
            typewriter.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, speed);
        } else {
            isAdding = true;
            textIndex = (textIndex + 1) % texts.length; // Passa para o próximo texto
            setTimeout(type, speed);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});

const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordcount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const mascot = document.getElementById('mascot');

function updateCounts() {
    const text = textInput.value;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    wordCountDisplay.textContent = `Words: ${wordCount}`;
    sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;

    if (!mascot.style.transform || mascot.style.transform === 'scaleX(1)') {
        mascot.style.transform = 'scaleX(-1)'; 
    } else {
        mascot.style.transform = 'scaleX(1)';
    }
}

textInput.addEventListener('input', updateCounts);

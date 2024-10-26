

document.querySelectorAll('body > *').forEach(i => i.classList.add('tom-hidden'));

document.body.appendChild(document.createElement('div')).innerHTML = `
    <button onclick="backToWLED()">
        <span>Back to WLED</span>
    </button>
    `;
















    function backToWLED() {
        document.querySelectorAll('body > *').forEach(i => i.classList.remove('tom-hidden'));
    }
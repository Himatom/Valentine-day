
function confetti(options = {}) {
    const colors = options.colors || ['#ff4081', '#ff0000', '#ffffff'];
    const particleCount = options.particleCount || 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('confetti-particle');
        
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100 + 'vw';
        const animDuration = Math.random() * 3 + 2 + 's';
        
        particle.style.backgroundColor = bg;
        particle.style.left = left;
        particle.style.top = '-10px';
        particle.style.animationDuration = animDuration;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 5000);
    }
}

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainText = document.getElementById('mainText');
const subText = document.getElementById('subText');
const gifContainer = document.getElementById('gifContainer');
const noTexts = ["Are you sure?", "Really sure?", "Think again!", "Last chance!", "You can't escape love 💘", "I'm gonna cry...", "Don't do this!"];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
    noBtn.innerText = randomText;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        colors: ['#ff4081', '#ff0000', '#ffffff', '#ffeb3b']
    });

    mainText.innerText = "YAYYY! I Knew It! 🥰";
    subText.innerText = "I Love You! ❤️";
    
    gifContainer.innerHTML = '<img src="valentine.gif" alt="Celebration" style="width: 250px;">';

    document.querySelector('.buttons').style.display = 'none';
    
    let interval = setInterval(() => {
        confetti({ particleCount: 20 });
    }, 500);

    setTimeout(() => clearInterval(interval), 5000);
});
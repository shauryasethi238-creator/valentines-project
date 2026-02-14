// ===== FLOATING HEARTS ANIMATION =====
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    if (!heartsContainer) return;
    
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }, 2000);
}

// Add CSS for floating hearts dynamically
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: absolute;
        bottom: -50px;
        animation: floatUp linear forwards;
        pointer-events: none;
    }
    
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== NO BUTTON EVASION =====
function setupNoButton() {
    const noButton = document.getElementById('noButton');
    if (!noButton) return;
    
    let clickAttempts = 0;
    const messages = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Please? 🥺",
        "Pretty please?",
        "One more chance?"
    ];
    
    function moveButton() {
        const container = noButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        const maxX = containerRect.width - buttonRect.width - 40;
        const maxY = containerRect.height - buttonRect.height - 40;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
        
        // Change button text
        if (clickAttempts < messages.length) {
            noButton.textContent = messages[clickAttempts];
            clickAttempts++;
        }
        
        // Make button smaller each time
        const currentSize = parseFloat(getComputedStyle(noButton).fontSize);
        if (currentSize > 12) {
            noButton.style.fontSize = (currentSize - 2) + 'px';
            noButton.style.padding = '12px 35px';
        }
    }
    
    // Move on hover
    noButton.addEventListener('mouseenter', moveButton);
    
    // Move on touch (mobile)
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
    
    // If they somehow click it
    noButton.addEventListener('click', (e) => {
        e.preventDefault();
        moveButton();
        alert("Oops! The button moved! 😄 Try clicking YES instead! 💕");
    });
}

// ===== YES BUTTON HANDLER =====
function setupYesButton() {
    const yesButton = document.getElementById('yesButton');
    if (!yesButton) return;
    
    yesButton.addEventListener('click', async () => {
        // Save response
        try {
            await fetch('/save-response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: 'YES! 💕' })
            });
        } catch (error) {
            console.error('Error saving response:', error);
        }
        
        // Redirect to celebration page
        window.location.href = '/celebration';
    });
}

// ===== MUSIC TOGGLE =====
let audio = null;
let isMusicPlaying = false;

function setupMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    if (!musicToggle) return;
    
    // Note: You'll need to add your own music file to static/audio/music.mp3
    // For now, this is a placeholder
    audio = new Audio('/static/audio/music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            audio.pause();
            musicToggle.textContent = '🔇';
            isMusicPlaying = false;
        } else {
            audio.play().catch(err => {
                console.log('Audio play failed:', err);
                alert('Please click again to play music! 🎵');
            });
            musicToggle.textContent = '🔊';
            isMusicPlaying = true;
        }
    });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    setupNoButton();
    setupYesButton();
    setupMusicToggle();
});

// Made with Bob

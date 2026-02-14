// ===== CONFETTI ANIMATION FOR CELEBRATION PAGE =====
class ConfettiGenerator {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#DC143C', '#FFD700', '#FF6347'];
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.createParticles();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const particleCount = 150;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                size: Math.random() * 8 + 4,
                speedY: Math.random() * 3 + 2,
                speedX: Math.random() * 2 - 1,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 10 - 5,
                shape: Math.random() > 0.5 ? 'circle' : 'square'
            });
        }
    }
    
    drawParticle(particle) {
        this.ctx.save();
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate((particle.rotation * Math.PI) / 180);
        this.ctx.fillStyle = particle.color;
        
        if (particle.shape === 'circle') {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        }
        
        this.ctx.restore();
    }
    
    updateParticle(particle) {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;
        
        // Reset particle when it goes off screen
        if (particle.y > this.canvas.height) {
            particle.y = -20;
            particle.x = Math.random() * this.canvas.width;
        }
        
        if (particle.x > this.canvas.width) {
            particle.x = 0;
        } else if (particle.x < 0) {
            particle.x = this.canvas.width;
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            this.updateParticle(particle);
            this.drawParticle(particle);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== HEART CONFETTI =====
class HeartConfetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.hearts = [];
        
        this.createHearts();
        this.animateHearts();
    }
    
    createHearts() {
        const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘', '💞'];
        
        for (let i = 0; i < 30; i++) {
            this.hearts.push({
                emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                size: Math.random() * 30 + 20,
                speedY: Math.random() * 2 + 1,
                speedX: Math.random() * 2 - 1,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 5 - 2.5
            });
        }
    }
    
    drawHeart(heart) {
        this.ctx.save();
        this.ctx.translate(heart.x, heart.y);
        this.ctx.rotate((heart.rotation * Math.PI) / 180);
        this.ctx.font = `${heart.size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(heart.emoji, 0, 0);
        this.ctx.restore();
    }
    
    updateHeart(heart) {
        heart.y += heart.speedY;
        heart.x += heart.speedX;
        heart.rotation += heart.rotationSpeed;
        
        if (heart.y > this.canvas.height + 50) {
            heart.y = -50;
            heart.x = Math.random() * this.canvas.width;
        }
    }
    
    animateHearts() {
        this.hearts.forEach(heart => {
            this.updateHeart(heart);
            this.drawHeart(heart);
        });
        
        requestAnimationFrame(() => this.animateHearts());
    }
}

// ===== INITIALIZE CONFETTI =====
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('confetti-canvas')) {
        new ConfettiGenerator();
        
        // Add heart confetti after a delay
        setTimeout(() => {
            new HeartConfetti();
        }, 500);
    }
});

// Made with Bob

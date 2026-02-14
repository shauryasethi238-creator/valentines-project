// // ===== COUNTDOWN TIMER TO VALENTINE'S DAY 2026 =====
// function updateCountdown() {
//     const countdownElement = document.getElementById('countdown');
//     if (!countdownElement) return;
    
//     // Valentine's Day 2026: February 14, 2026
//     const valentinesDay = new Date('2026-02-14T00:00:00').getTime();
    
//     function update() {
//         const now = new Date().getTime();
//         const distance = valentinesDay - now;
        
//         if (distance < 0) {
//             countdownElement.innerHTML = "It's Valentine's Day! 💕";
//             return;
//         }
        
//         // Calculate time units
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
//         // Display countdown
//         countdownElement.innerHTML = `
//             <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
//                 <span style="font-weight: bold;">${days}d</span>
//                 <span style="font-weight: bold;">${hours}h</span>
//                 <span style="font-weight: bold;">${minutes}m</span>
//                 <span style="font-weight: bold;">${seconds}s</span>
//             </div>
//         `;
//     }
    
//     // Update immediately and then every second
//     update();
//     setInterval(update, 1000);
// }

// // Initialize countdown when page loads
// document.addEventListener('DOMContentLoaded', updateCountdown);

// // Made with Bob

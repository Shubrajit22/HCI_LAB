function updateClock() {
    const now = new Date();
    
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
    }
    
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
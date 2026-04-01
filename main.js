// Ce code affiche les erreurs directement sur ton écran d'iPad
window.onerror = function(msg, url, line) {
    alert("ERREUR : " + msg + "\nLigne : " + line);
};

// Redirige les logs de la console vers des alertes pour tester
console.log = function(msg) {
    alert("LOG : " + msg);
};
window.onload = function() {
    const btn = document.getElementById("start");
    
    btn.onclick = function() {
        console.log("Tentative de démarrage...");
        
        const emulator = new V86Starter({
            // On utilise les liens officiels pour être SÛR que ça charge
            wasm_path: "./build/v86.wasm",
            bios: { url: "./bios/seabios.bin" },
            vga_bios: { url: "./bios/vgabios.bin" },
            
            // On garde ton ISO locale (vérifie bien le nom du fichier !)
            cdrom: { url: "./images/tinycore.iso", async: true },
            
            memory_size: 512 * 1024 * 1024,
            autostart: true,
            canvas: document.getElementById("v86-canvas"),
            screen_container: document.getElementById("screen-container"),
        });
        
        document.getElementById('boot-screen').style.display = 'none';
        document.getElementById('screen-container').style.display = 'block';
    };
};

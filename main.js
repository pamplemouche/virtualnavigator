// Enregistrement du Service Worker pour débloquer la puissance du navigateur
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

async function startVM() {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('screen-container').style.display = 'block';

    const emulator = new V86Starter({
        wasm_path: "https://copy.sh/v86/build/v86.wasm",
        memory_size: 1024 * 1024 * 1024, // 1GB
        vga_as_pci_device: true,
        bios: { url: "./bios/seabios.bin" },
        vga_bios: { url: "./bios/vgabios.bin" },
        cdrom: { 
            url: "./images/recovery.iso",
            async: true // Permet de ne pas télécharger les 600Mo d'un coup
        },
        autostart: true,
        canvas: document.getElementById("v86-canvas"),
    });
}

document.getElementById('start').onclick = startVM;

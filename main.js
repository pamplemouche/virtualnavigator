// Enregistrement du Service Worker pour débloquer la puissance du navigateur
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

async function startVM() {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('screen-container').style.display = 'block';

    // Remplace temporairement ton bloc emulator par celui-ci pour tester
const emulator = new V86Starter({
    wasm_path: "https://copy.sh/v86/build/v86.wasm",
    memory_size: 256 * 1024 * 1024, // Tiny Core n'a besoin que de 256MB
    bios: { url: "./bios/seabios.bin" },
    vga_bios: { url: "./bios/vgabios.bin" },
    cdrom: { url: "./images/tinycore.iso" }, // Vérifie bien le nom
    autostart: true,
    canvas: document.getElementById("v86-canvas"),
    // Ajoute ces deux lignes pour stabiliser l'affichage au début
    disable_keyboard: false,
    preserve_fifo: true
});
}

document.getElementById('start').onclick = startVM;

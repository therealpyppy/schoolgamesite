const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleColor = "#ffffff";

function spawnParticles(count) {
    let particles = [];
    for (let i = 0; i < count; i++) {
        let size = Math.random() * 3;
		let speed = 1.2
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * speed,
            dy: (Math.random() - 0.5) * speed,
            size: size,
            opacity: Math.random()
        });
    }
    return particles;
}

let particles = spawnParticles(160);

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.rect(p.x, p.y, p.size, p.size);
        ctx.stroke();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
    });
}

function updateParticles() {
    particles.forEach(p => {
        p.x = (p.x + p.dx + canvas.width) % canvas.width;
        p.y = (p.y + p.dy + canvas.height) % canvas.height;
    });
}

function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
}

animate();

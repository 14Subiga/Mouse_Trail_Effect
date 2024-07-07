document.addEventListener('DOMContentLoaded', () => {
    const trailCount = 30;  // Number of trail elements
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let currentIndex = 0;

    document.addEventListener('mousemove', (e) => {
        const trail = trails[currentIndex];
        trail.style.left = `${e.pageX - 7.5}px`;
        trail.style.top = `${e.pageY - 7.5}px`;

        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        trail.style.backgroundColor = color;

        trail.style.transform = 'scale(1)';
        trail.style.opacity = '1';

        currentIndex = (currentIndex + 1) % trailCount;

        setTimeout(() => {
            trail.style.transform = 'scale(0.5)';
            trail.style.opacity = '0';
        }, 300);
    });
});

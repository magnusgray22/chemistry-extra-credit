const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");
    circle.style.width = `${150 + i * 100}px`; // Energy level size grows
    circle.style.height = `${150 + i * 100}px`;
    circle.style.top = `${150 + i * 60}px`; // Drop circles lower
    circle.style.left = `250px`; // Center horizontally

    // Add sublevels
    const sublevelAngleStep = 360 / level.sublevels.length; // Even spacing for sublevels
    const radius = (150 + i * 100) / 2 - 50; // Keep sublevels inside the dotted circle

    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Dynamically calculate angle for sublevel
        const angle = j * sublevelAngleStep;

        // Calculate position based on angle and radius
        const x = 250 + radius * Math.cos((angle * Math.PI) / 180) - 20; // Adjust for sublevel size
        const y = 300 + radius * Math.sin((angle * Math.PI) / 180) - 20;

        // Apply position
        sub.style.left = `${x}px`;
        sub.style.top = `${y}px`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });

        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

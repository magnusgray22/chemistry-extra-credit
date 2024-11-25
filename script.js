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
    circle.style.width = `${100 + i * 80}px`;
    circle.style.height = `${100 + i * 80}px`;
    circle.style.top = `${200 - (50 + i * 40)}px`;
    circle.style.left = `${200 - (50 + i * 40)}px`;

    // Add sublevels
    const sublevelAngleStep = 360 / level.sublevels.length; // Equal spacing for sublevels
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Position sublevels around the circle
        const angle = j * sublevelAngleStep;
        const radius = (50 + i * 40) / 2; // Adjust radius for each energy level
        const x = 200 + radius * Math.cos((angle * Math.PI) / 180) - 20; // Adjust for sublevel size
        const y = 200 + radius * Math.sin((angle * Math.PI) / 180) - 20;
        sub.style.left = `${x}px`;
        sub.style.top = `${y}px`;

        // Hover effect for sublevels
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });
        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

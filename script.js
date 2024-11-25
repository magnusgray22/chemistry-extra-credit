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
    circle.style.top = `${200 + i * 50}px`; // Move circles lower
    circle.style.left = `200px`;

    // Add sublevels
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Define offsets for vertical alignment
        const sublevelOffsets = {
            s: -50, // Top-center
            p: -25, // Below s
            d: 25,  // Below p
            f: 50   // Below d
        };

        // Set x and y positions
        const x = 200; // Horizontally centered
        const y = 300 + sublevelOffsets[sublevel]; // Vertically aligned

        // Apply positions
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

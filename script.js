const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Center alignment and sizing settings
const baseTopOffset = 150; // Starting position for the first circle
const verticalSpacing = 150; // Space between circles vertically
const baseCircleSize = 100; // Base size for the first circle
const circleSizeIncrement = 50; // Size increment for each level

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    // Set energy level size and position
    const size = baseCircleSize + i * circleSizeIncrement;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${baseTopOffset + i * verticalSpacing}px`;
    circle.style.left = `50%`; // Center horizontally
    circle.style.transform = `translate(-50%, 0)`; // Center horizontally with transform

    // Add sublevels inside the circle
    const sublevelSpacing = size / (level.sublevels.length + 1); // Space out sublevels
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 30 + j * 10; // Sublevels grow slightly larger for each type
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels evenly within the circle
        sub.style.left = `${(size - sublevelSize) / 2}px`;
        sub.style.top = `${j * sublevelSpacing}px`;

        // Add text to the sublevel
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });

        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

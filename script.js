const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Horizontal alignment settings
const baseLeftOffset = 100; // Starting position for the first circle
const horizontalSpacing = 150; // Space between circles
const baseTopPosition = 450; // Align all circles along the same horizontal line

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    // Set the size of the energy level
    const size = 80 + i * 20; // Circles grow slightly bigger for higher levels
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Position circles horizontally along the bottom
    circle.style.left = `${baseLeftOffset + i * horizontalSpacing}px`; // Increment left position
    circle.style.top = `${baseTopPosition}px`; // Align to the bottom line

    // Add sublevels inside each circle
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Set size for sublevels and align them centrally within the circle
        const sublevelSize = 20 + j * 10; // Sublevels grow slightly larger
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;
        sub.style.left = `${(size - sublevelSize) / 2}px`; // Center horizontally
        sub.style.top = `${(size - sublevelSize) / 2}px`; // Center vertically

        // Add text for the sublevel
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });

        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

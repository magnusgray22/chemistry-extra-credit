const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Settings for layout and alignment
const baseTopOffset = 200; // Position of the first energy level
const verticalSpacing = 150; // Spacing between energy levels
const baseCircleSize = 200; // Base size of the dotted circle
const circleSizeIncrement = 100; // Size increment for each level

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    // Set size and position for the circle
    const size = baseCircleSize + i * circleSizeIncrement;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${baseTopOffset + i * verticalSpacing}px`;
    circle.style.left = `50%`; // Center horizontally
    circle.style.transform = `translate(-50%, 0)`; // Align center horizontally

    // Add sublevels to the circle
    const radius = size / 2 - 50; // Adjust radius for sublevels
    const sublevelCount = level.sublevels.length; // Number of sublevels to include
    const angleStep = 360 / sublevelCount; // Angle between sublevels

    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 30 + j * 10; // Sublevels grow slightly for each type
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Calculate position for sublevels
        const angle = j * angleStep;
        const x = radius * Math.cos((angle * Math.PI) / 180); // X offset
        const y = radius * Math.sin((angle * Math.PI) / 180); // Y offset
        sub.style.left = `${(size - sublevelSize) / 2 + x}px`;
        sub.style.top = `${(size - sublevelSize) / 2 + y}px`;

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

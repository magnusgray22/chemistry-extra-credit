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

    // Set energy level size
    circle.style.width = `${150 + i * 100}px`; // Increase size incrementally
    circle.style.height = `${150 + i * 100}px`;

    // Drop circles lower on the page
    circle.style.top = `${200 + i * 70}px`;
    circle.style.left = `250px`; // Center horizontally

    // Add sublevels
    const sublevelSpacing = 90; // Fixed horizontal spacing for sublevels
    const baseRadius = (150 + i * 100) / 2 - 50; // Sublevels stay inside the circle

    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sizeIncrement = 10 * j; // Each subsequent sublevel grows slightly
        const sublevelSize = 40 + sizeIncrement;

        // Apply size and position
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;
        sub.style.left = `${250 + j * sublevelSpacing}px`; // Position evenly spaced
        sub.style.top = `${300 + i * 70}px`; // Align sublevels on the same line

        // Add text to sublevel
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });

        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

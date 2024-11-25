const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Layout settings
const baseTopOffset = 50; // Move everything higher on the page
const verticalSpacing = 15; // Smaller spacing between lines (1/4 cm)
const dottedCircleSize = 200; // Larger dotted circles to "hold" sublevels
const sublevelSpacing = 50; // Keep 1 cm horizontal spacing for sublevels

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level (dotted) circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    // Set the size of the dotted circle
    const size = dottedCircleSize + i * 50; // Larger size for higher levels
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Move higher and reduce spacing
    circle.style.left = `50%`; // Center horizontally
    circle.style.transform = `translate(-50%, 0)`; // Align horizontally

    // Add sublevels to the circle
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 30 + j * 10; // Sublevels grow slightly larger
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels in a horizontal line
        const xOffset = sublevelSpacing * j; // 1 cm spacing between sublevels
        sub.style.position = "absolute";
        sub.style.left = `calc(50% + ${xOffset - (level.sublevels.length * sublevelSpacing) / 2}px)`;
        sub.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Align horizontally

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

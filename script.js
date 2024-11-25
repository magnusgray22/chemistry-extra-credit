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
const baseTopOffset = 50; // Vertical starting position for the first dotted circle
const verticalSpacing = 60; // Reduced vertical spacing between dotted circles
const dottedCircleSize = 100; // Base size for the smallest dotted circle
const circleSizeIncrement = 75; // Increment for larger dotted circles
const sublevelHorizontalSpacing = 25; // 1/2 cm (5px) spacing between sublevels

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level (dotted) circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    // Set the size of the dotted circle
    const size = dottedCircleSize + i * circleSizeIncrement; // Larger size for higher levels
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Position each level higher
    circle.style.left = `50%`; // Center horizontally
    circle.style.transform = `translate(-50%, 0)`; // Align center horizontally

    // Add sublevels to the circle
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 30 + j * 10; // Sublevels grow slightly larger
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels horizontally on the dotted circle
        const xOffset = sublevelHorizontalSpacing * j; // 1/2 cm spacing between sublevels
        const yOffset = size / 2 - sublevelSize / 2; // Place sublevels on the dotted circle
        sub.style.position = "absolute";
        sub.style.left = `calc(50% + ${xOffset - (level.sublevels.length * sublevelHorizontalSpacing) / 2}px)`;
        sub.style.top = `${baseTopOffset + i * verticalSpacing - yOffset}px`;

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

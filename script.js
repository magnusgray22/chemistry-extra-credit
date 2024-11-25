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
const baseTopOffset = 100; // Start at the top of the main background circle
const verticalSpacing = 80; // Vertical spacing between rows
const sublevelHorizontalSpacing = 120; // Horizontal spacing between sublevels

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Add sublevels to the horizontal line
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 30 + j * 10; // Sublevels grow slightly larger
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels horizontally and center them within the main background circle
        const xOffset = sublevelHorizontalSpacing * j; // Space sublevels horizontally
        sub.style.position = "absolute";
        sub.style.left = `calc(50% + ${xOffset - (level.sublevels.length * sublevelHorizontalSpacing) / 2}px)`; // Center horizontally
        sub.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Position each row below the previous one

        // Add text to the sublevel
        sub.textContent = `${sublevel} (${level.electrons[j]})`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });

        diagram.appendChild(sub);
    });
});

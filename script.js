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
const baseTopOffset = 20; // Position of the first horizontal line
const verticalSpacing = 30; // Spacing between each horizontal line
const dottedCircleSize = 50; // Base size for smaller dotted circles
const sublevelHorizontalSpacing = 80; // Space between sublevels on the same line

// Generate energy levels and sublevels
energyLevels.forEach((level, i) => {
    // Create the energy level (dotted) circle
    const circle = document.createElement("div");
    circle.classList.add("energy-level");

    const dottedCircleSize = 50; // Base size for smaller dotted circles
const circleSizeIncrement = 20; // Increment for larger dotted circles

energyLevels.forEach((level, i) => {
    // Adjust the size of each dotted circle
    const size = dottedCircleSize + i * circleSizeIncrement; // Larger size for higher levels
    const circle = document.querySelector(`.energy-level:nth-child(${i + 1})`);

    if (circle) {
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
    }

    // Add sublevels to the horizontal line
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size
        const sublevelSize = 20 + j * 10; // Sublevels grow slightly larger
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels horizontally
        const xOffset = sublevelHorizontalSpacing * j; // Space sublevels horizontally
        sub.style.position = "absolute";
        sub.style.left = `calc(50% + ${xOffset - (level.sublevels.length * sublevelHorizontalSpacing) / 2}px)`;
        sub.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Align all horizontally

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

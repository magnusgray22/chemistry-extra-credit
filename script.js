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
        sub.classList.add("sublevel", sublevel); // Add class for orbital shapes

        // Dynamically assign shape and electron capacity
        let shape, electronCapacity;
        if (sublevel === "s") {
            shape = "Sphere"; // Shape for s orbital
            electronCapacity = 2; // Max electrons
        } else if (sublevel === "p") {
            shape = "Dumbbell"; // Shape for p orbital
            electronCapacity = 6; // Max electrons
        } else if (sublevel === "d") {
            shape = "Cloverleaf"; // Shape for d orbital
            electronCapacity = 10; // Max electrons
        } else if (sublevel === "f") {
            shape = "Complex"; // Shape for f orbital
            electronCapacity = 14; // Max electrons
        }

        // Add shape and capacity to tooltip or hover info
        sub.setAttribute("data-shape", shape);
        sub.setAttribute(
            "title",
            `${sublevel.toUpperCase()} Orbital (${shape}, Max ${electronCapacity} electrons)`
        );

        // Dynamically adjust sublevel size
        const sublevelSize = 40; // Fixed size for sublevels
        sub.style.width = `${sublevelSize}px`;
        sub.style.height = `${sublevelSize}px`;

        // Position sublevels horizontally and center them within the main background circle
        const xOffset = sublevelHorizontalSpacing * j; // Space sublevels horizontally
        sub.style.position = "absolute";
        sub.style.left = `calc(50% + ${xOffset - (level.sublevels.length * sublevelHorizontalSpacing) / 2}px)`; // Center horizontally
        sub.style.top = `${baseTopOffset + i * verticalSpacing}px`; // Position each row below the previous one

        // Add text to the sublevel
        sub.textContent = `${sublevel.toUpperCase()}`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>${sublevel.toUpperCase()} Orbital</h2><p>Shape: ${shape}</p><p>Max Electrons: ${electronCapacity}</p>`;
        });

        diagram.appendChild(sub);
    });
});

// Add Magnus Gray, Boston Heal, and B4
const footerText = document.createElement("div");
footerText.style.position = "absolute";
footerText.style.bottom = "10px"; // Position near the bottom
footerText.style.left = "50%"; // Center horizontally
footerText.style.transform = "translateX(-50%)"; // Adjust for centering
footerText.style.fontSize = "18px"; // Adjust text size
footerText.style.fontWeight = "bold"; // Bold text
footerText.textContent = "Magnus Gray, Boston Heal, B4";

// Append to the diagram
diagram.appendChild(footerText);

energyLevels.forEach((level, i) => {
    // Add sublevels to the horizontal line
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);

        // Dynamically adjust sublevel size and shape
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

        // Set shape as a title or data attribute for visualization
        sub.setAttribute("data-shape", shape);
        sub.setAttribute("title", `${sublevel.toUpperCase()} Orbital (${shape}, Max ${electronCapacity} electrons)`);

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
        sub.textContent = `${sublevel.toUpperCase()} (${level.electrons[j]} electrons)`;

        // Hover effect
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>${sublevel.toUpperCase()} Orbital</h2><p>Shape: ${shape}</p><p>Max Electrons: ${electronCapacity}</p>`;
        });

        diagram.appendChild(sub);
    });
});

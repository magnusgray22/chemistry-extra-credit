const diagram = document.getElementById("diagram");
const info = document.getElementById("info");

// Energy levels and sublevels data
const energyLevels = [
    { level: 1, sublevels: ["s"], electrons: [2] },
    { level: 2, sublevels: ["s", "p"], electrons: [2, 6] },
    { level: 3, sublevels: ["s", "p", "d"], electrons: [2, 6, 10] },
    { level: 4, sublevels: ["s", "p", "d", "f"], electrons: [2, 6, 10, 14] }
];

// Generate diagram
energyLevels.forEach((level, i) => {
    const circle = document.createElement("div");
    circle.classList.add("energy-level");
    circle.style.width = `${75 + i * 50}px`;
    circle.style.height = `${75 + i * 50}px`;
    circle.style.top = `${175 - i * 25}px`;
    circle.style.left = `${175 - i * 25}px`;

    // Add sublevels
    level.sublevels.forEach((sublevel, j) => {
        const sub = document.createElement("div");
        sub.classList.add("sublevel", sublevel);
        sub.textContent = `${sublevel} (${level.electrons[j]})`;
        sub.addEventListener("mouseover", () => {
            info.innerHTML = `<h2>Sublevel: ${sublevel.toUpperCase()}</h2><p>Electrons: ${level.electrons[j]}</p>`;
        });
        circle.appendChild(sub);
    });

    diagram.appendChild(circle);
});

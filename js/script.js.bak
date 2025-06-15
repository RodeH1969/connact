document.addEventListener("DOMContentLoaded", () => {
    // Toggle Admin Panel
    const adminToggle = document.querySelector(".admin-toggle");
    const adminPanel = document.querySelector(".admin-panel");
    const adminClose = document.querySelector(".admin-close");

    adminToggle.addEventListener("click", () => {
        adminPanel.style.display = "block";
    });

    adminClose.addEventListener("click", () => {
        adminPanel.style.display = "none";
    });

    // File Upload Preview (client-side only)
    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener("change", (e) => {
        const files = e.target.files;
        for (let file of files) {
            if (file.type === "image/png") {
                console.log(`Uploaded: ${file.name}`);
                // Backend needed for actual upload
            }
        }
    });

    // Sequence Builder (placeholder)
    const addStepBtn = document.getElementById("addStep");
    const clearSequenceBtn = document.getElementById("clearSequence");
    const sequenceBuilder = document.getElementById("sequenceBuilder");

    addStepBtn.addEventListener("click", () => {
        const step = document.createElement("div");
        step.textContent = "New Step (configure actor/movie)";
        sequenceBuilder.appendChild(step);
        // Add logic for selecting actor/movie
    });

    clearSequenceBtn.addEventListener("click", () => {
        sequenceBuilder.innerHTML = "";
    });

    // Save Game (placeholder)
    document.getElementById("saveGame").addEventListener("click", () => {
        console.log("Saving game configuration...");
        // Backend needed for saving
    });

    // Export Configuration (placeholder)
    document.getElementById("exportConfig").addEventListener("click", () => {
        console.log("Exporting configuration...");
        // Backend needed for export
    });

    // Anchor Actor Selection
    document.getElementById("anchorActor").addEventListener("change", (e) => {
        console.log(`Anchor actor set to: ${e.target.value}`);
        // Update grid with anchor actor
    });

    // Logo Preview
    document.getElementById("logoFile").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file && file.type === "image/png") {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.querySelector(".logo-preview").src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
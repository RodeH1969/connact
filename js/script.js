document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".game-grid");
    const uploadArea = document.querySelector(".upload-area");
    const adminToggle = document.querySelector(".admin-toggle");
    const adminPanel = document.querySelector(".admin-panel");
    const adminClose = document.querySelector(".admin-close");

    // Toggle Admin Panel
    adminToggle.addEventListener("click", () => {
        adminPanel.style.display = "block";
    });

    adminClose.addEventListener("click", () => {
        adminPanel.style.display = "none";
    });

    // Initialize Grid with Existing Tiles
    const initialTiles = [
        { src: "actors/Melissa_McCarthy.png", alt: "Melissa McCarthy" },
        { src: "movies/bridesmaids.png", alt: "Bridesmaids" },
        { src: "actors/rebel_wilson.png", alt: "Rebel Wilson" },
        { src: "movies/pitchperfect.png", alt: "Pitch Perfect" },
        { src: "actors/anna_kendrick.png", alt: "Anna Kendrick" },
        { src: "movies/upintheair.png", alt: "Up in the Air" },
        { src: "actors/vera_farmiga.png", alt: "Vera Farmiga" },
        { src: "movies/couplesretreat.png", alt: "Couples Retreat" },
        { src: "actors/kristen_bell.png", alt: "Kristen Bell" },
        { src: "movies/badmoms.png", alt: "Bad Moms" },
        { src: "actors/mila_kunis.png", alt: "Mila Kunis" },
        { src: "movies/ted.png", alt: "Ted" },
        { src: "actors/mark_wahlberg.png", alt: "Mark Wahlberg" },
        { src: "movies/thedeparted.png", alt: "The Departed" },
        { src: "actors/jason_bateman.png", alt: "Jason Bateman" },
        { src: "movies/identitythief.png", alt: "Identity Thief" },
        { src: "actors/Melissa_McCarthy.png", alt: "Melissa McCarthy" }
    ];

    initialTiles.forEach(tile => {
        const div = document.createElement("div");
        div.className = "tile";
        div.setAttribute("draggable", "true");
        div.innerHTML = `<img src="${tile.src}" alt="${tile.alt}" loading="lazy">`;
        grid.appendChild(div);
    });

    // Drag and Drop for Tiles
    let draggedTile = null;

    grid.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("tile")) {
            draggedTile = e.target;
            e.target.classList.add("dragging");
            e.dataTransfer.setData("text/plain", e.target.innerHTML);
        }
    });

    grid.addEventListener("dragend", (e) => {
        if (e.target.classList.contains("tile")) {
            e.target.classList.remove("dragging");
            draggedTile = null;
        }
    });

    grid.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    grid.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedTile && e.target.classList.contains("tile")) {
            const rect = e.target.getBoundingClientRect();
            const dropZone = e.clientX - rect.left < rect.width / 2 ? "before" : "after";
            if (dropZone === "before") {
                grid.insertBefore(draggedTile, e.target);
            } else {
                grid.insertBefore(draggedTile, e.target.nextSibling);
            }
        }
    });

    // File Upload and Drag to Grid
    uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("dragover");
    });

    uploadArea.addEventListener("dragleave", () => {
        uploadArea.classList.remove("dragover");
    });

    uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("dragover");
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    const fileInput = document.getElementById("fileInput");
    fileInput.addEventListener("change", (e) => {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        for (let file of files) {
            if (file.type === "image/png") {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = document.createElement("img");
                    img.src = event.target.result;
                    img.alt = file.name;
                    const tile = document.createElement("div");
                    tile.className = "tile";
                    tile.setAttribute("draggable", "true");
                    tile.appendChild(img);
                    grid.appendChild(tile);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    // Image loading fallback
    grid.querySelectorAll("img").forEach(img => {
        img.onerror = () => {
            console.log(`Image failed to load: ${img.src}`);
            img.src = "connact_logo.png";
            img.alt = "Fallback Image";
        };
    });

    // Anchor Actor Selection (placeholder)
    document.getElementById("anchorActor").addEventListener("change", (e) => {
        console.log(`Anchor actor set to: ${e.target.value}`);
        // Update grid positions 1 and 17
    });

    // Sequence Builder (placeholder)
    const addStepBtn = document.getElementById("addStep");
    const clearSequenceBtn = document.getElementById("clearSequence");
    const sequenceBuilder = document.getElementById("sequenceBuilder");

    addStepBtn.addEventListener("click", () => {
        const step = document.createElement("div");
        step.textContent = "New Step";
        sequenceBuilder.appendChild(step);
    });

    clearSequenceBtn.addEventListener("click", () => {
        sequenceBuilder.innerHTML = "";
    });

    // Save and Export (placeholder)
    document.getElementById("saveGame").addEventListener("click", () => {
        console.log("Saving game configuration...");
    });

    document.getElementById("exportConfig").addEventListener("click", () => {
        console.log("Exporting configuration...");
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
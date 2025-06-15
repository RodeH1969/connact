document.addEventListener("DOMContentLoaded", () => {
    // No admin panel logic since button/panel are commented out
    // Add your custom grid or game logic here if needed
    const grid = document.querySelector(".game-grid");
    if (grid) {
        // Optional: Dynamic tile loading (if your original used JS)
        const tiles = [
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
        grid.innerHTML = ""; // Clear static tiles if present
        tiles.forEach(tile => {
            const div = document.createElement("div");
            div.className = "tile";
            div.innerHTML = `<img src="${tile.src}" alt="${tile.alt}">`;
            grid.appendChild(div);
        });
    }

    // Fallback for image loading
    document.querySelectorAll(".tile img").forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            console.log(`Image not loaded: ${img.src}`);
            img.src = "connact_logo.png"; // Fallback image
        }
    });
});
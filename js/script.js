document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".game-grid");

    // Dynamic tile loading to ensure images are set correctly
    if (grid) {
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
        grid.innerHTML = ""; // Clear any static or broken tiles
        tiles.forEach(tile => {
            const div = document.createElement("div");
            div.className = "tile";
            div.innerHTML = `<img src="${tile.src}" alt="${tile.alt}" loading="lazy">`;
            grid.appendChild(div);
        });

        // Image loading fallback
        grid.querySelectorAll("img").forEach(img => {
            img.onerror = () => {
                console.log(`Image failed to load: ${img.src}`);
                img.src = "connact_logo.png"; // Fallback to logo
                img.alt = "Fallback Image";
            };
        });
    }
});
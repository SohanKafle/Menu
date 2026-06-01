document.addEventListener("DOMContentLoaded", () => {

    // Search input
    const searchInput = document.querySelector('input[type="search"]');

    // All category cards
    const categories = document.querySelectorAll("article");

    // Search functionality
    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const keyword = this.value.toLowerCase().trim();

            categories.forEach(category => {

                const text =
                    category.textContent.toLowerCase();

                if (text.includes(keyword)) {
                    category.style.display = "";
                } else {
                    category.style.display = "none";
                }

            });

        });

    }

    // Click animation and navigation
    categories.forEach(category => {

        category.style.cursor = "pointer";

        category.addEventListener("click", () => {

            // Remove active state from all cards
            categories.forEach(c => {
                c.classList.remove(
                    "ring-2",
                    "ring-orange-500",
                    "scale-[1.02]"
                );
            });

            // Add active state
            category.classList.add(
                "ring-2",
                "ring-orange-500",
                "scale-[1.02]"
            );

            const title =
                category.querySelector("h2")
                ?.innerText
                ?.trim();

            console.log("Selected Category:", title);


        });

    });

    // Smooth hover effect
    categories.forEach(category => {

        category.style.transition =
            "all 0.3s ease";

        category.addEventListener("mouseenter", () => {

            category.style.transform =
                "translateY(-4px)";

        });

        category.addEventListener("mouseleave", () => {

            if (
                !category.classList.contains("ring-2")
            ) {
                category.style.transform =
                    "translateY(0)";
            }

        });

    });

});
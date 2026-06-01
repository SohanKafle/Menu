document.addEventListener("DOMContentLoaded", () => {

    const categories = [
        { name: "CLASSIC COFFEE", items: 9 },
        { name: "ICED COFFEE", items: 15 },
        { name: "FRAPPE", items: 4 },
        { name: "REFRESHERS", items: 9 },
        { name: "SMOOTHIE MILKSHAKE", items: 11 },
        { name: "SOFT DRINKS", items: 19 },
        { name: "HOT BEVERAGE", items: 7 },
        { name: "LASSI", items: 8 },
        { name: "SAZE SPECIAL", items: 5 },
        { name: "SMOKE", items: 15 },
        { name: "WINE", items: 6 },
        { name: "BEER", items: 5 },
        { name: "COCKTAILS", items: 8 },
        { name: "HARD DRINKS", items: 17 },
        { name: "BIRIYANI", items: 3 },
        { name: "NAAN ROTI", items: 9 },
        { name: "VEG CURRY", items: 8 },
        { name: "NON VEG CURRY", items: 6 },
        { name: "PIZZA", items: 14 },
        { name: "BURGER", items: 4 },
        { name: "ROLLS SHAWARMA", items: 4 },
        { name: "MOMO", items: 10 },
        { name: "NOODLES", items: 4 },
        { name: "SIZZLER", items: 4 },
        { name: "SOUP", items: 4 },
        { name: "RICE", items: 4 },
        { name: "VEG STARTERS", items: 4 },
        { name: "TANDOOR ITEMS", items: 4 },
        { name: "NON VEG STARTERS", items: 4 }
    ];

    const container =
        document.getElementById("menuCategories");

    const search =
        document.getElementById("search");

    function renderCategories(data) {

        container.innerHTML = "";

        data.forEach(category => {

            const article =
                document.createElement("article");

            article.className =
                "group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/50 cursor-pointer";

            article.innerHTML = `
                <div class="h-[3px] w-full bg-gradient-to-r from-primary via-orange-400 to-amber-300"></div>

                <div class="p-5 md:p-7">

                    <button class="w-full flex items-center justify-between text-left">

                        <h2 class="text-xl md:text-2xl font-bold uppercase tracking-wider">
                            ${category.name}
                        </h2>

                        <span class="text-sm opacity-70 whitespace-nowrap">
                            ${category.items} items
                        </span>

                    </button>

                </div>
            `;

            article.addEventListener("click", () => {

                document
                    .querySelectorAll("#menuCategories article")
                    .forEach(card => {

                        card.classList.remove(
                            "ring-2",
                            "ring-orange-500"
                        );

                    });

                article.classList.add(
                    "ring-2",
                    "ring-orange-500"
                );

                console.log(
                    "Selected Category:",
                    category.name
                );

            });

            container.appendChild(article);

        });

    }

    renderCategories(categories);

    search.addEventListener("input", () => {

        const keyword =
            search.value.toLowerCase();

        const filtered =
            categories.filter(cat =>
                cat.name
                    .toLowerCase()
                    .includes(keyword)
            );

        renderCategories(filtered);

    });

});
document.addEventListener("DOMContentLoaded", () => {

  const categories = [

    {
      name: "CLASSIC COFFEE",
      products: [
        { name: "Espresso", price: 180 },
        { name: "Americano", price: 220 },
        { name: "Cappuccino", price: 280 },
        { name: "Latte", price: 300 },
        { name: "Mocha", price: 340 },
        { name: "Flat White", price: 320 },
        { name: "Macchiato", price: 260 }
      ]
    },
    {
      name: "ICED COFFEE",
      products: [
        { name: "Iced Americano", price: 250 },
        { name: "Iced Latte", price: 320 },
        { name: "Cold Brew", price: 350 },
        { name: "Caramel Iced Coffee", price: 360 },
        { name: "Vanilla Iced Coffee", price: 340 },
        { name: "Hazelnut Iced Coffee", price: 370 }
      ]
    },
    {
      name: "FRAPPE",
      products: [
        { name: "Coffee Frappe", price: 320 },
        { name: "Mocha Frappe", price: 350 },
        { name: "Chocolate Frappe", price: 370 },
        { name: "Vanilla Frappe", price: 340 },
        { name: "Caramel Frappe", price: 380 }
      ]
    },
    {
      name: "REFRESHERS",
      products: [
        { name: "Virgin Mojito", price: 280 },
        { name: "Mint Lemonade", price: 180 },
        { name: "Blue Lagoon", price: 250 },
        { name: "Watermelon Splash", price: 240 },
        { name: "Kiwi Refresher", price: 270 },
        { name: "Green Apple Cooler", price: 260 }
      ]
    },
    {
      name: "SMOOTHIE MILKSHAKE",
      products: [
        { name: "Chocolate Shake", price: 350 },
        { name: "Oreo Shake", price: 370 },
        { name: "Strawberry Shake", price: 340 },
        { name: "Banana Smoothie", price: 320 },
        { name: "Mango Smoothie", price: 330 },
        { name: "KitKat Shake", price: 390 }
      ]
    },
    {
      name: "SOFT DRINKS",
      products: [
        { name: "Coca Cola", price: 80 },
        { name: "Sprite", price: 80 },
        { name: "Fanta", price: 80 },
        { name: "Pepsi", price: 80 },
        { name: "Mountain Dew", price: 90 }
      ]
    },
    {
      name: "HOT BEVERAGE",
      products: [
        { name: "Masala Tea", price: 120 },
        { name: "Green Tea", price: 100 },
        { name: "Black Tea", price: 90 },
        { name: "Hot Chocolate", price: 220 },
        { name: "Lemon Tea", price: 110 }
      ]
    },
    {
      name: "LASSI",
      products: [
        { name: "Sweet Lassi", price: 180 },
        { name: "Plain Lassi", price: 160 },
        { name: "Mango Lassi", price: 220 },
        { name: "Banana Lassi", price: 210 },
        { name: "Strawberry Lassi", price: 230 }
      ]
    },
    {
      name: "PIZZA",
      products: [
        { name: "Margherita Pizza", price: 650 },
        { name: "Veggie Delight", price: 750 },
        { name: "Chicken Supreme", price: 850 },
        { name: "Pepperoni Pizza", price: 900 },
        { name: "BBQ Chicken Pizza", price: 950 },
        { name: "Paneer Pizza", price: 820 },
        { name: "Cheese Burst Pizza", price: 1000 }
      ]
    },
    {
      name: "BURGER",
      products: [
        { name: "Veg Burger", price: 250 },
        { name: "Chicken Burger", price: 320 },
        { name: "Cheese Burger", price: 350 },
        { name: "Double Patty Burger", price: 450 },
        { name: "BBQ Burger", price: 420 },
        { name: "Crispy Burger", price: 390 }
      ]
    },
    {
      name: "MOMO",
      products: [
        { name: "Veg Momo", price: 180 },
        { name: "Chicken Momo", price: 220 },
        { name: "Buff Momo", price: 250 },
        { name: "Fried Momo", price: 280 },
        { name: "Chilli Momo", price: 320 },
        { name: "Jhol Momo", price: 350 },
        { name: "Tandoori Momo", price: 420 }
      ]
    },
    {
      name: "NOODLES",
      products: [
        { name: "Veg Chowmein", price: 180 },
        { name: "Chicken Chowmein", price: 250 },
        { name: "Mixed Chowmein", price: 280 },
        { name: "Hakka Noodles", price: 300 },
        { name: "Schezwan Noodles", price: 320 }
      ]
    },
    {
      name: "BIRIYANI",
      products: [
        { name: "Veg Biryani", price: 350 },
        { name: "Chicken Biryani", price: 450 },
        { name: "Mutton Biryani", price: 550 },
        { name: "Special Biryani", price: 650 },
        { name: "Hyderabadi Biryani", price: 600 }
      ]
    },
    {
      name: "VEG CURRY",
      products: [
        { name: "Paneer Butter Masala", price: 320 },
        { name: "Mix Veg Curry", price: 280 },
        { name: "Aloo Gobi", price: 250 },
        { name: "Mushroom Masala", price: 330 },
        { name: "Palak Paneer", price: 340 }
      ]
    },
    {
      name: "NON VEG CURRY",
      products: [
        { name: "Chicken Curry", price: 400 },
        { name: "Butter Chicken", price: 450 },
        { name: "Chicken Korma", price: 480 },
        { name: "Mutton Curry", price: 550 },
        { name: "Chicken Masala", price: 430 }
      ]
    },
    {
      name: "NAAN ROTI",
      products: [
        { name: "Butter Naan", price: 80 },
        { name: "Garlic Naan", price: 120 },
        { name: "Plain Naan", price: 70 },
        { name: "Tandoori Roti", price: 60 },
        { name: "Cheese Naan", price: 150 }
      ]
    },
    {
      name: "ROLLS SHAWARMA",
      products: [
        { name: "Chicken Shawarma", price: 220 },
        { name: "Special Shawarma", price: 280 },
        { name: "Chicken Roll", price: 250 },
        { name: "Veg Roll", price: 180 },
        { name: "Paneer Roll", price: 220 }
      ]
    },
    {
      name: "SOUP",
      products: [
        { name: "Hot & Sour Soup", price: 180 },
        { name: "Sweet Corn Soup", price: 200 },
        { name: "Chicken Soup", price: 220 },
        { name: "Mushroom Soup", price: 210 },
        { name: "Tomato Soup", price: 170 }
      ]
    },
    {
      name: "RICE",
      products: [
        { name: "Steam Rice", price: 120 },
        { name: "Veg Fried Rice", price: 220 },
        { name: "Chicken Fried Rice", price: 280 },
        { name: "Egg Fried Rice", price: 250 },
        { name: "Mixed Fried Rice", price: 320 }
      ]
    },
    {
      name: "SAZE SPECIAL",
      products: [
        { name: "Saze Special Platter", price: 850 },
        { name: "Chef's Special Pizza", price: 950 },
        { name: "Special Chicken Steak", price: 780 },
        { name: "House Special Burger", price: 550 },
        { name: "Special Mixed Grill", price: 1200 },
        { name: "Signature Pasta", price: 650 }
      ]
    },
    {
      name: "SMOKE",
      products: [
        { name: "Mint Hookah", price: 700 },
        { name: "Double Apple Hookah", price: 800 },
        { name: "Blueberry Hookah", price: 850 },
        { name: "Grape Hookah", price: 850 },
        { name: "Watermelon Hookah", price: 900 },
        { name: "Pan Rasna Hookah", price: 950 }
      ]
    },
    {
      name: "WINE",
      products: [
        { name: "Red Wine Glass", price: 700 },
        { name: "White Wine Glass", price: 750 },
        { name: "Rose Wine Glass", price: 800 },
        { name: "Red Wine Bottle", price: 3500 },
        { name: "White Wine Bottle", price: 3800 },
        { name: "Premium Reserve Wine", price: 5500 }
      ]
    },
    {
      name: "BEER",
      products: [
        { name: "Tuborg", price: 450 },
        { name: "Carlsberg", price: 500 },
        { name: "Budweiser", price: 550 },
        { name: "Heineken", price: 600 },
        { name: "Nepal Ice", price: 450 },
        { name: "Gorkha Beer", price: 500 }
      ]
    },
    {
      name: "COCKTAILS",
      products: [
        { name: "Mojito", price: 450 },
        { name: "Margarita", price: 550 },
        { name: "Cosmopolitan", price: 600 },
        { name: "Long Island Iced Tea", price: 750 },
        { name: "Pina Colada", price: 650 },
        { name: "Tequila Sunrise", price: 600 },
        { name: "Blue Lagoon Cocktail", price: 650 }
      ]
    },
    {
      name: "HARD DRINKS",
      products: [
        { name: "Jack Daniel's", price: 850 },
        { name: "Black Label", price: 900 },
        { name: "Chivas Regal", price: 1000 },
        { name: "Old Durbar", price: 550 },
        { name: "Khukri Rum", price: 500 },
        { name: "Absolut Vodka", price: 700 },
        { name: "Bombay Sapphire Gin", price: 850 }
      ]
    },
    {
      name: "SIZZLER",
      products: [
        { name: "Chicken Sizzler", price: 650 },
        { name: "Mixed Sizzler", price: 750 },
        { name: "Veg Sizzler", price: 550 },
        { name: "BBQ Chicken Sizzler", price: 800 },
        { name: "Paneer Sizzler", price: 620 },
        { name: "Seafood Sizzler", price: 950 }
      ]
    },
    {
      name: "VEG STARTERS",
      products: [
        { name: "Paneer Chilli", price: 320 },
        { name: "Veg Manchurian", price: 280 },
        { name: "French Fries", price: 180 },
        { name: "Crispy Corn", price: 250 },
        { name: "Mushroom Chilli", price: 320 },
        { name: "Veg Spring Roll", price: 280 },
        { name: "Paneer Tikka", price: 380 }
      ]
    },
    {
      name: "TANDOOR ITEMS",
      products: [
        { name: "Chicken Tikka", price: 450 },
        { name: "Tandoori Chicken Half", price: 550 },
        { name: "Tandoori Chicken Full", price: 950 },
        { name: "Paneer Tikka", price: 380 },
        { name: "Malai Tikka", price: 520 },
        { name: "Chicken Seekh Kebab", price: 480 },
        { name: "Fish Tikka", price: 650 }
      ]
    },
    {
      name: "NON VEG STARTERS",
      products: [
        { name: "Chicken Chilli", price: 350 },
        { name: "Chicken Lollipop", price: 420 },
        { name: "Chicken Wings", price: 450 },
        { name: "Dragon Chicken", price: 480 },
        { name: "Chicken Manchurian", price: 400 },
        { name: "Fish Finger", price: 550 },
        { name: "Crispy Chicken", price: 450 }
      ]
    }

  ];

  const container = document.getElementById("menuCategories");
  const searchInput = document.getElementById("search");

  function renderCategories(data) {

    container.innerHTML = "";

    data.forEach(category => {

      const article = document.createElement("article");

      article.className =
        "group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl";

      article.innerHTML = `
                <div class="h-[3px] w-full bg-gradient-to-r from-primary via-orange-400 to-amber-300"></div>

                <div class="p-5 md:p-7">

                    <button class="category-btn w-full flex items-center justify-between text-left">

                        <h2 class="text-xl md:text-2xl font-bold uppercase tracking-wider">
                            ${category.name}
                        </h2>

                        <div class="flex items-center gap-3">

                            <span class="text-sm opacity-70">
                                ${category.products.length} items
                            </span>

                            <span class="arrow text-xl">
                                ▼
                            </span>

                        </div>

                    </button>

                    <div class="product-list hidden mt-5 border-t border-white/10 pt-4">
                    </div>

                </div>
            `;

      const productList =
        article.querySelector(".product-list");

      category.products.forEach(product => {

        productList.innerHTML += `
                    <div class="flex justify-between py-3 border-b border-white/10">

                        <span>${product.name}</span>

                        <span class="text-primary font-semibold">
                            Rs. ${product.price}
                        </span>

                    </div>
                `;

      });

      const button =
        article.querySelector(".category-btn");

      const arrow =
        article.querySelector(".arrow");

      button.addEventListener("click", () => {

        const isHidden =
          productList.classList.contains("hidden");

        document
          .querySelectorAll(".product-list")
          .forEach(list => {
            list.classList.add("hidden");
          });

        document
          .querySelectorAll(".arrow")
          .forEach(icon => {
            icon.textContent = "▼";
          });

        if (isHidden) {
          productList.classList.remove("hidden");
          arrow.textContent = "▲";
        }

      });

      container.appendChild(article);

    });

  }

  renderCategories(categories);

  searchInput.addEventListener("input", () => {

    const keyword =
      searchInput.value.toLowerCase();

    const filtered =
      categories.filter(category =>
        category.name
          .toLowerCase()
          .includes(keyword)
      );

    renderCategories(filtered);

  });

});
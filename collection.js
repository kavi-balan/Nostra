// Product Data Array
const products = [
  {
    name: "Floral Summer Shirt",
    price: 220,
    category: "Summer",
    color: "Red",
    arrival: "New",
    image: "collection-img/c1.jpg",
  },
  {
    name: "Summer Green",
    price: 260,
    category: "Summer",
    color: "Green",
    arrival: "Old",
    image: "collection-img/c2.jpg",
  },
  {
    name: "Party Floral Shirt",
    price: 399,
    category: "Party",
    color: "White",
    arrival: "New",
    image: "collection-img/c3.jpg",
  },
  {
    name: "Beach Shirt",
    price: 570,
    category: "Beach",
    color: "Blue",
    arrival: "New",
    image: "collection-img/c4.jpg",
  },
  {
    name: "Shirt Party Red",
    price: 575,
    category: "Party",
    color: "Red",
    arrival: "Old",
    image: "collection-img/c5.jpg",
  },
  {
    name: "Floral Summer Shirt",
    price: 220,
    category: "Summer",
    color: "White",
    arrival: "New",
    image: "collection-img/c6.jpg",
  },
];

// Display Products
function displayProducts(filteredProducts) {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = ""; // Clear previous products

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>₹${product.price}</p>
        `;

    productGrid.appendChild(productCard);
  });
}

// Initial Display of All Products
displayProducts(products);

// Get all checkboxes
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const searchInput = document.querySelector(".search-bar input");

// Filter Products Based on Checkboxes and Search Input
function filterProducts() {
  const selectedCategories = [];
  const selectedColors = [];
  const selectedArrivals = [];
  const searchQuery = searchInput.value.toLowerCase();

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = checkbox.parentNode.textContent.trim();

      if (["Summer", "Party", "Beach"].includes(label)) {
        selectedCategories.push(label);
      }
      if (["Red", "Blue", "White", "Green"].includes(label)) {
        selectedColors.push(label);
      }
      if (["New", "Old"].includes(label)) {
        selectedArrivals.push(label);
      }
    }
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesArrival =
      selectedArrivals.length === 0 ||
      selectedArrivals.includes(product.arrival);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesColor && matchesArrival && matchesSearch;
  });

  displayProducts(filteredProducts);
}

// Attach Event Listeners to Checkboxes and Search Bar
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", filterProducts)
);
searchInput.addEventListener("input", filterProducts);

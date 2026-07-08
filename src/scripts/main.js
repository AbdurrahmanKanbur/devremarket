const cartCount = document.querySelector("[data-cart-count]");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");

let cartQuantity = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartQuantity += 1;
    cartCount.textContent = cartQuantity;
    button.textContent = "Eklendi";

    window.setTimeout(() => {
      button.textContent = "Sepete Ekle";
    }, 900);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    products.forEach((product) => {
      const isVisible = selectedCategory === "all" || product.dataset.category === selectedCategory;
      product.classList.toggle("is-hidden", !isVisible);
    });
  });
});

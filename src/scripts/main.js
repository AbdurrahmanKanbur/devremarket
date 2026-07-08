const offerButtons = document.querySelectorAll(".add-to-cart");
const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");
const messageField = document.querySelector('textarea[name="message"]');
const prepareMessageButton = document.querySelector("[data-prepare-message]");

const scrollToContact = () => {
  document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const productName = product?.querySelector("h3")?.textContent?.trim();

    if (messageField && productName) {
      messageField.value = `${productName} hakkında teklif almak istiyorum. Adet ve proje ihtiyacımı paylaşmak istiyorum.`;
    }

    button.textContent = "Not Hazır";
    scrollToContact();

    window.setTimeout(() => {
      button.textContent = "Teklif İste";
    }, 1200);
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

prepareMessageButton?.addEventListener("click", () => {
  if (!messageField) return;

  if (!messageField.value.trim()) {
    messageField.value = "Merhaba, Devre Market üzerinden ürün/proje paketi için teklif almak istiyorum.";
  }

  messageField.focus();
});

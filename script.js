document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));

    this.classList.add("active");
  });
});

// ================ description section ====================

const descriptionText = document.querySelector(".description-text");
const showMoreBtn = document.querySelector(".show-more");
let isExpanded = false;

showMoreBtn.addEventListener("click", () => {
  if (isExpanded) {
    descriptionText.style.maxHeight = "80px";
    showMoreBtn.textContent = "Показать все ▼";
  } else {
    descriptionText.style.maxHeight = "1000px"; // Yetarlicha katta bo‘lishi kerak
    showMoreBtn.textContent = "Скрыть ▲";
  }
  isExpanded = !isExpanded;
});

// features section

document.getElementById("toggleButton").addEventListener("click", function () {
  let hiddenRows = document.querySelectorAll(".hidden");
  let isHidden =
    hiddenRows[0].style.display === "none" ||
    hiddenRows[0].style.display === "";

  hiddenRows.forEach((row) => {
    row.style.display = isHidden ? "table-row" : "none";
  });

  this.innerHTML = isHidden ? "Скрыть ▲" : "Показать все ▼";
});

// payment and delivery

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let hiddenItems = this.previousElementSibling.querySelectorAll(".hidden");
    let isHidden =
      hiddenItems[0].style.display === "none" ||
      hiddenItems[0].style.display === "";

    hiddenItems.forEach((item) => {
      item.style.display = isHidden ? "list-item" : "none";
    });

    this.innerHTML = isHidden ? "Скрыть ▲" : "Подробнее ▼";
  });
});

document
  .querySelector(".show-number")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".phone-number").textContent = "+998 99 123 45 67";
    this.style.display = "none";
  });

const products = [
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "Нет в наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "Под заказ",
    discount: "-15%",
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: "-15%",
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "similar",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "Нет в наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "Под заказ",
    discount: "-15%",
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/watch.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: "-15%",
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
  {
    name: "Knife Sharpener Tool Professional",
    image: "img/pc.png",
    price: "3 000 000 сум",
    status: "В наличии",
    discount: null,
    market: "Media Park",
    location: "г. Ташкент",
    category: "recomendation",
  },
];

const productList = document.getElementById("product-list");
const recomendationList = document.querySelector(".recomendation-list");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
            ${
              product.discount
                ? `<div class="badge">${product.discount}</div>`
                : ""
            }
            <div class="product-card__img">
              <img src="${product.image}" alt="${product.name}">
            </div>
           <div class="card-info">
              <p class="product-name">${product.name}</p>
              <p class="status">${product.status}</p>
              <p class="price">${product.price}</p>
           </div>
           <div class="line"/>
           <div class="card-location">
              <p class="market">${product.market}</p>
              <p class="location">${product.location}</p>
           </div>
        `;

  if (product.category === "similar") {
    productList.appendChild(productCard);
  } else {
    recomendationList.appendChild(productCard);
  }
});

// info Modal ================================

const buy_btn = document.querySelector(".product-buy__btn");
const modal = document.querySelector(".info-modal");
const closeBtn = document.querySelector(".close-btn");
const sendBtn = document.querySelector(".send-btn");
const sendModal = document.querySelector(".send-modal");
const cancelBtn = document.querySelector(".cancel-btn");
const confirmModal = document.querySelector(".confirm-modal");
const closeConfrim = document.querySelector(".close-confirm-btn");
const confirmBtn = document.querySelector(".confirm-btn");

buy_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  sendModal.style.display = "none";
  document.body.style.overflow = "";
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendModal.style.display = "flex";
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendModal.style.display = "none";
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmModal.style.display = "flex";
});

closeConfrim.addEventListener("click", (e) => {
  e.preventDefault();
  confirmModal.style.display = "none";
});

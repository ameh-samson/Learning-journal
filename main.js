const menuBar = document.querySelector("#menu-bar");
const navLinks = document.querySelector(".nav");
const viewMoreBtn = document.querySelector("#viewMore-btn");
const loadMoreArticle = document.querySelector(".load-more-article");
const featuredPostContainer = document.querySelector(
  ".featured-post-container"
);

console.log(featuredPostContainer);
menuBar.addEventListener("click", openMenu);
viewMoreBtn.addEventListener("click", function () {
  loadMoreArticles();
});

function openMenu() {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuBar.style.color = "#ffffff";
  } else {
    menuBar.style.color = "";
  }
}

function loadMoreArticles() {
  const articlesHTML = `
  <article class="load-more-article home-article">
  <img src="assets/img/blog-image-04.png" alt="" />
  <p class="article-date">SEPTEMBER 23, 2023</p>
  <h2 class="article-title">Blog four</h2>
  <p class="article-body-preview">
    I'm excited to start a new learning journey as a Scrimba Bootcamp
    student! After several months of learning in the Frontend
    Developer Career Path.
  </p>
</article>

<article class="load-more-article home-article">
  <img src="assets/img/blog-image-05.png" alt="" />
  <p class="article-date">SEPTEMBER 23, 2023</p>
  <h2 class="article-title">Blog five</h2>
  <p class="article-body-preview">
    I'm excited to start a new learning journey as a Scrimba Bootcamp
    student! After several months of learning in the Frontend
    Developer Career Path.
  </p>
</article>

<article class="load-more-article home-article">
  <img src="assets/img/blog-image-06.png" alt="" />
  <p class="article-date">SEPTEMBER 23, 2023</p>
  <h2 class="article-title">Blog six</h2>
  <p class="article-body-preview">
    I'm excited to start a new learning journey as a Scrimba Bootcamp
    student! After several months of learning in the Frontend
    Developer Career Path.
  </p>
</article>
    `;

  featuredPostContainer.innerHTML += articlesHTML;

  if (viewMoreBtn.style.display === "block") {
    viewMoreBtn.style.display = "none";
  }
}

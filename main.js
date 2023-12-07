// SELECT DOM ELEMENTS FOR MOBILE NAV | START
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
// SELECT DOM ELEMENTS FOR MOBILE NAV | END
const viewMoreBtn = document.querySelector("#viewMore-btn");
const loadMoreArticle = document.querySelectorAll(".load-more-article");

viewMoreBtn.addEventListener("click", viewMoreArticle);

// MOBILE NAVIGATION FUNCTIONALITY | START
btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

headerEl.addEventListener("click", function (event) {
    // Check if the clicked element is a navigation link
    if (event.target.classList.contains("nav-link")) {
        // Close the mobile navigation
        headerEl.classList.remove("nav-open");
    }
});

// MOBILE NAVIGATION FUNCTIONALITY | END

function viewMoreArticle() {
    viewMoreBtn.textContent =
        viewMoreBtn.textContent === "View More" ? "View Less" : "View More";

    loadMoreArticle.forEach((e) => {
        e.classList.toggle("load-more");
    });
}

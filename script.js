
/* ============================================ 
   About Us Content
   ============================================ */

   let currentHeight = 220;

// How much to open per click (400px covers approx 2-3 paragraphs)
const stepHeight = 400;

function loadMoreContent(btn) {
  const contentBox = document.getElementById("aboutContentArea");
  const fadeOverlay = document.getElementById("aboutFade");
  const spanText = btn.querySelector("span");
  const icon = btn.querySelector("i");

  // Get the full height of the content
  const totalHeight = contentBox.scrollHeight;

  // CHECK: If button says "Show Less", Collapse everything
  if (spanText.innerText === "Show Less") {
    contentBox.style.maxHeight = "220px"; // Reset to initial CSS height
    currentHeight = 220; // Reset counter
    spanText.innerText = "Read More";
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    fadeOverlay.style.opacity = "1"; // Show fade again

    // Smooth scroll back to top of section
    contentBox.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // LOGIC: Increase height by stepHeight
  currentHeight += stepHeight;

  // Check if we have reached the end
  if (currentHeight >= totalHeight) {
    contentBox.style.maxHeight = totalHeight + "px"; // Open fully
    spanText.innerText = "Show Less";
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    fadeOverlay.style.opacity = "0"; // Hide fade
  } else {
    contentBox.style.maxHeight = currentHeight + "px"; // Open step
  }
}

/* ============================================ 
     Gallery - Lightbox Effect
   ============================================ */

  document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. FILTER FUNCTIONALITY ---
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryWraps = document.querySelectorAll(".gallery-wrap");

    filterBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Loop through items and show/hide based on category
        galleryWraps.forEach(wrap => {
          if (filterValue === "all" || wrap.getAttribute("data-category") === filterValue) {
            wrap.classList.remove("hide");
            wrap.style.opacity = "0";
            setTimeout(() => { wrap.style.opacity = "1"; }, 50);
          } else {
            wrap.classList.add("hide");
          }
        });
      });
    });

    // --- 2. LIGHTBOX IMAGE CLICK FUNCTIONALITY ---
    const galleryBoxes = document.querySelectorAll(".gallery-item");
    const lightboxImage = document.getElementById("lightboxImage");

    galleryBoxes.forEach(box => {
      box.addEventListener("click", function() {
        const imgInside = this.querySelector("img");
        if (imgInside) {
          lightboxImage.src = imgInside.src;
        }
      });
    });

  });


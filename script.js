
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
  document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxImage = document.getElementById('lightboxImage');

    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        // Find the image inside the clicked div
        const imgElement = this.querySelector('img');
        // Copy that image's source into the popup modal
        if (imgElement) {
          lightboxImage.src = imgElement.src;
        }
      });
    });
  });


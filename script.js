// login form 

document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputEmail = document.getElementById("emailInput").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const allowedEmail = "admin@gmail.com";


    if (inputEmail.toLowerCase() === allowedEmail.toLowerCase()) {
      window.location.href = "profile.html";
    } else {
      errorMsg.classList.remove("hidden");
    }
  });


//   trending now

const carousel = document.getElementById("trendingCarousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn?.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn?.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });


  // modelbox 


   const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");

  document.querySelectorAll('#trendingCarousel > div').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const img = card.getAttribute('data-img');
      const desc = card.getAttribute('data-description');

      modalTitle.innerText = title;
      modalImg.src = img;
      modalDesc.innerText = desc;

      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

// questions


 const toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('span');

        content.classList.toggle('hidden');
        icon.textContent = content.classList.contains('hidden') ? '+' : '−';
      });
    });



  // profile.html

  document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
      window.location.href = 'broser.html';
    });
  });

  //browser.html
  
 function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

 //carousel for Romantic Korean TV Shows
  function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 320; // Scroll 1 card (width + margin)
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }



 
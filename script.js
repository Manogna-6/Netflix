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
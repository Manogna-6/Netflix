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
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const scrollAmount = 300;

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });


// questions
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('span');

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '−';
      } else {
        content.classList.add('hidden');
        icon.textContent = '+';
      }
    });
  });



  // profile.html

  document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
      window.location.href = 'broser.html';
    });
  });
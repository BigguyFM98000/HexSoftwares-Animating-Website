// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Animation trigger on load
    document.querySelector(".header").classList.add("animate");
  
    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    const feedbackMessage = document.getElementById("feedback");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Validate form fields
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        // If all fields are filled, show success message
        feedbackMessage.textContent = "Thank you for reaching out! Your message has been sent.";
        feedbackMessage.style.color = "green";
  
        // Clear form fields
        contactForm.reset();
      } else {
        // If any field is empty, show an error message
        feedbackMessage.textContent = "Please fill out all fields before submitting.";
        feedbackMessage.style.color = "red";
      }
    });
  });
  
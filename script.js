document.addEventListener("DOMContentLoaded", () => {
    // Progress bar animation simulation
    const progressFill = document.getElementById("progress-fill");
    const progressText = document.getElementById("progress-text");
    
    const targetPercentage = 75; // Güncelleme oranını buradan ayarlayabilirsiniz
    
    setTimeout(() => {
        progressFill.style.width = targetPercentage + "%";
        progressText.textContent = targetPercentage + "% Tamamlandı";
    }, 400);

    // Notification form handling
    const form = document.getElementById("notify-form");
    const emailInput = document.getElementById("email-input");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (email) {
            // Here you can integrate with email services (Formspree, Netlify Forms, Firebase etc.)
            form.style.display = "none";
            successMessage.classList.remove("hidden");
        }
    });
});

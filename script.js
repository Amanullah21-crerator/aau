document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Loaded!");

    // Social Media Button Alerts
    document.querySelector(".telegram").addEventListener("click", function () {
        alert("Redirecting to Telegram...");
    });

    document.querySelector(".whatsapp").addEventListener("click", function () {
        alert("Redirecting to WhatsApp...");
    });
});

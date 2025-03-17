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
function toggleMenu() {
    var menu = document.querySelector(".mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

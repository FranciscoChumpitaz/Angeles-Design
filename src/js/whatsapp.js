/* ==========================================
   WHATSAPP FORM
========================================== */

const WHATSAPP_NUMBER = "51964670672"; 

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const service = document.querySelector("#service").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !phone || !service || !message) {
            alert("Por favor completa todos los campos antes de enviar.");
            return;
        }

        const whatsappMessage = `
Hola, soy ${name}.
Quiero solicitar información sobre: ${service}.

Mi teléfono es: ${phone}

Mensaje:
${message}
        `;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    });
}

/* Floating WhatsApp Button */

const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach((button) => {
    button.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
});
/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".section-header, .stat-card, .about-image, .about-content, .service-card, .portfolio-item, .process-card, .testimonial-card, .faq-item, .contact-content, .contact-form"
);

revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (index % 3 === 1) {
        element.classList.add("reveal-delay-1");
    }

    if (index % 3 === 2) {
        element.classList.add("reveal-delay-2");
    }
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
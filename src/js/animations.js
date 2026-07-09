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
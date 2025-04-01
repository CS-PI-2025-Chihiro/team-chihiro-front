document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains("active");

            document.querySelectorAll(".faq-answer").forEach((el) => {
                el.style.display = "none";
            });
            document.querySelectorAll(".faq-question").forEach((btn) => {
                btn.classList.remove("active");
            });

            if (!isActive) {
                answer.style.display = "block";
                question.classList.add("active");
            }
        });
    });
});
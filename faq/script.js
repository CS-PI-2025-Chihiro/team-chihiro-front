document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector(".faq-container");

    fetch("json/faq.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const li = document.createElement("li");

                const button = document.createElement("button");
                button.classList.add("faq-question");
                button.innerHTML = `${index + 1}. ${item.question}`;
                
                const answer = document.createElement("p");
                answer.classList.add("faq-answer");
                answer.textContent = item.answer;

                button.addEventListener("click", () => {
                    const isActive = button.classList.contains("active");
                    document.querySelectorAll(".faq-question").forEach(btn => btn.classList.remove("active"));
                    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

                    if (!isActive) {
                        button.classList.add("active");
                        answer.style.display = "block";
                    }
                });

                li.appendChild(button);
                li.appendChild(answer);
                faqContainer.appendChild(li);
            });
        })
        .catch(error => console.error("Erro ao carregar FAQ:", error));
});
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

                button.setAttribute("aria-expanded", "false");
                button.setAttribute("id", `question-${index + 1}`);
                button.setAttribute("aria-controls", `answer-${index + 1}`);
                
                const answer = document.createElement("p");
                answer.classList.add("faq-answer");
                answer.textContent = item.answer;

                answer.setAttribute("id", `answer-${index + 1}`);
                answer.setAttribute("role", "region");
                answer.setAttribute("aria-labelledby", `question-${index + 1}`);

                button.addEventListener("click", () => {
                    const isActive = button.classList.contains("active");
                    document.querySelectorAll(".faq-question").forEach(btn => {
                        btn.classList.remove("active");
                        btn.setAttribute("aria-expanded", "false");
                    });
                    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

                    if (!isActive) {
                        button.classList.add("active");
                        button.setAttribute("aria-expanded", "true");
                        answer.style.display = "block";
                    }
                });

                button.addEventListener("keydown", (event) => {
                    if(event.key === "Enter" || event.key === " ") {
                        event.preventDefalt();
                        button.click();
                    }
                })

                li.appendChild(button);
                li.appendChild(answer);
                faqContainer.appendChild(li);
            });
        })
        .catch(error => console.error("Erro ao carregar FAQ:", error));
});
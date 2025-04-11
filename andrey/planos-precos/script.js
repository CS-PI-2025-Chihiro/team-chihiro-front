function changeTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    const button = document.getElementById("change-theme");
    button.textContent = newTheme === "light" ? "Dark" : "Light";
}

function increaseText() {
    const body = document.body;
    const button = document.getElementById("increase-text");
    const currentSize = window.getComputedStyle(body).fontSize;
    const cards = document.querySelectorAll(".card");

    let newSize;
    let textButton;
    let newCardHeight
    if (currentSize === "16px") { 
        newSize = "20px"; 
        newCardHeight = "640px";
        textButton = "Small";
    } else if (currentSize === "20px") { 
        newSize = "12px"; 
        newCardHeight = "420px";
        textButton = "Medium";
    } else {
        newSize = "16px"; 
        newCardHeight = "520px"
        textButton = "Large";
    }

    button.textContent = textButton;
    body.style.fontSize = newSize;

    cards.forEach(card => {
        card.style.height = newCardHeight;
    });
}
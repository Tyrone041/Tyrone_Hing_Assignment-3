// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

//Added code that when the submit button is clicked it'll display the Thank you for your message screen and not show the rest of the pages contents. Also added the section for the thank you message following the prompts details
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const contactPage = document.getElementById("contact-page");

    const thankyoumessage = document.createElement("p");
    thankyoumessage.textContent = "Thank you for your message";
    thankyoumessage.style.fontSize = "24px";

    contactPage.innerHTML = "";
    contactPage.appendChild(thankyoumessage);
});
var validForm = document.getElementById("validForm");
var output = document.getElementById("output");

validForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var regxSelect = {
        "Master Card": /^(5[1-5])(\d{14})$/,
        "Visa": /^4(\d{12})(\d{3})?$/,
        "American Express": /^3[47](\d{13})$/
    };

    var cardtype = document.getElementById("card").value;
    var cardNumber = document.getElementById("cardNumber").value.trim();

    var regx = regxSelect[cardtype];

    if (regx && regx.test(cardNumber)) {
        output.innerHTML = "Valid Card";
        output.style.color = "green";
    } else {
        output.innerHTML = "Invalid Card";
        output.style.color = "red";
    }
});

function calculateFare() {
    const age = document.getElementById('age').value;
    const resultDiv = document.getElementById('fare-result');
    
    if(age && age > 0) {
        const message = age <= 19 
            ? "You can pay child's fare (€2.50)" 
            : "You must pay adult fare (€5.00)";
        resultDiv.textContent = message;
    } else {
        resultDiv.textContent = "Please enter a valid age";
    }
}

function showCuisine() {
    const name = document.getElementById('userName').value;
    const cuisine = document.getElementById('cuisine').value;
    const textarea = document.getElementById('food-result');
    
    if(name && cuisine) {
        textarea.value = `Hello ${name}!\nRecommended ${cuisine} restaurants:\n1. Example ${cuisine} Bistro\n2. The ${cuisine} House\n3. ${cuisine} Kitchen`;
    } else {
        textarea.value = "Please fill in both fields";
    }
}
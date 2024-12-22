document.getElementById("calculatebtn").addEventListener("click", calculateTip);

function calculateTip() {
    const billAmountInput = document.getElementById("billamt");
    const serviceRatingSelect = document.getElementById("serviceRating");
    const splitCountInput = document.getElementById("splitcount");
    const mealTypeSelect = document.getElementById("mealtype");

    const tipAmtOutput = document.getElementById("tipamt");
    const totalAmtOutput = document.getElementById("totalamt");
    const amtPerPersonOutput = document.getElementById("amtperperson");

    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseFloat(serviceRatingSelect.value);
    const splitCount = parseInt(splitCountInput.value);
    const mealType = mealTypeSelect.value;

    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)) {
        tipAmtOutput.textContent = "Please enter valid numbers!";
        totalAmtOutput.textContent = "";
        amtPerPersonOutput.textContent = "";
        return;
    }

    let tip;
    switch (serviceRating) {
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
        default:
            tip = 0;
    }

    let totalAmount = billAmount + tip;
    let amtperperson=totalAmount/splitCount;

    if (mealType === "dinner") {
        tip += 5;
        totalAmount += 5;
        amtperperson +=5;
    }



    tipAmtOutput.textContent = `Tip: $${tip.toFixed(2)}`;
    totalAmtOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    amtPerPersonOutput.textContent = `Amount Per Person: $${amtperperson.toFixed(2)}`;
}

// Function to calculate the total cost
function calculateTotal() {
    // Get the cost per liter of petrol entered by the user
    var cost = parseFloat(document.getElementById("cost").value);
    // Get the number of liters of petrol purchased by the user
    var liters = parseFloat(document.getElementById("liters").value);
    // Calculate the total cost by multiplying the cost per liter with liters purchased
    var totalCost = cost * liters;
        // Display the total cost in pounds with two decimal places
    document.getElementById("total-cost").innerText = "Total Cost: £" + totalCost.toFixed(2);
}
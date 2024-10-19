// Open the Customize Cake Modal
function openCustomizeModal() {
    document.getElementById('customize-modal').style.display = 'block';
}

// Close the Customize Cake Modal
function closeCustomizeModal() {
    document.getElementById('customize-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('customize-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle the form submission for cake customization
document.getElementById('customize-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from the form
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const flavor = document.getElementById('flavor').value;
    const look = document.getElementById('look').value;

    // Create a message for the customization
    const message = `You have added a ${size} ${flavor} cake with ${color} color and ${look} design to your cart!`;

    // Show the message in an alert (or you can display it in a more user-friendly way)
    alert(message);

    // Close the modal after adding to the cart
    closeCustomizeModal();
});

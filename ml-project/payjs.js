// Initialize Google Maps
function initMap() {
    // Replace with your actual coordinates
    const dropLocation = { lat: 37.7749, lng: -122.4194 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: dropLocation,
        zoom: 14
    });

    const marker = new google.maps.Marker({
        position: dropLocation,
        map: map,
        title: 'Dropping Location'
    });
}

// Function to handle payment processing
function processPayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (paymentMethod) {
        const selectedPaymentMethod = paymentMethod.value;
        // Add logic to handle payment based on the selected method
        alert(`Processing payment using ${selectedPaymentMethod}`);
    } else {
        alert('Please select a payment method');
    }
}

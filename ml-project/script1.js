function predict() {
    // Get input from the HTML input box
    var imageUrl = document.getElementById("inputImage").value;

    // Send the input to the server for prediction
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: imageUrl }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the output on the HTML page
        document.getElementById("output").innerText = "Prediction: " + data.prediction;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

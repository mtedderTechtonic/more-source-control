// This is a function that displays a secret message in the conole
function secretMessage() {
    console.log("hello world!")
}

// This invokes the function
secretMessage()

// This is a function that displays an alert
function alertMessage() {
    alert("hello world")
}

// This is a click event that fires off the alertMessage function
document.getElementById("button").onclick = function() {alertMessage()}

// Change text dynamically
function changeText() {
    document.getElementById("content").textContent = "The text has been changed!";
    document.getElementById("title").style.color = "blue"; // Change heading color
}

// Add or remove an element
function toggleElement() {
    let box = document.getElementById("box");
    if (box.classList.contains("hidden")) {
        box.classList.remove("hidden");
    } else {
        box.classList.add("hidden");
    }
}

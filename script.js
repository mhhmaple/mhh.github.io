document.addEventListener("mousemove", function(event) {
    var floatingContainer = document.getElementById("floating-container");
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    floatingContainer.style.left = mouseX + "px";
    floatingContainer.style.top = mouseY + "px";
});
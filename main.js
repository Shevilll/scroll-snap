const scrollContainer = document.querySelector(".scroll-container");
scrollContainer.addEventListener("scroll", function () {
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const containerHeight = scrollContainer.offsetHeight;

    const scrollPercentage =
        (scrollTop / (scrollHeight - containerHeight)) * 100;

    // Define the color change thresholds and corresponding colors
    const threshold1 = 25; // Percentage to reach first color change
    const threshold2 = 75; // Percentage to reach second color change
    const color1 = "aqua"; // First color
    const color2 = "rgb(0,123,225)"; // Second color
    const color3 = "rgb(11,122,1)"; // Default color

    let bgcolor = color3; // Default color

    if (scrollPercentage > threshold2) {
        bgcolor = color2;
    } else if (scrollPercentage > threshold1) {
        bgcolor = color1;
    }

    scrollContainer.style.setProperty("--background", bgcolor);
});

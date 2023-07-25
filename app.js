// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the h1 and p elements
    const h1Element = document.getElementById("header-h1");
    const pElement = document.getElementById("header-p");

    // Set initial opacity to 0 (invisible)
    h1Element.style.opacity = "0";
    pElement.style.opacity = "0";

    // Function to gradually increase opacity
    function fadeInElements() {
      let opacity = 0;
      const interval = 50; // 50 milliseconds interval for smooth transition
      const targetOpacity = 1; // Target opacity (100%)

      // Function to increase opacity at regular intervals
      function increaseOpacity() {
        opacity += 0.1; // Increase opacity by 0.1 (adjust as needed)
        h1Element.style.opacity = opacity;
        pElement.style.opacity = opacity;

        // Check if opacity has reached the target value (1 or 100%)
        if (opacity >= targetOpacity) {
          // Opacity reached the target value, stop the interval
          clearInterval(opacityInterval);
        }
      }

      // Start the interval for increasing opacity
      const opacityInterval = setInterval(increaseOpacity, interval);
    }

    // Call the function after a delay
    setTimeout(fadeInElements, 250);

    // Get the navbar element
    const navbar = document.getElementById("navbar");
    const brand = document.getElementById("brand");

    // Listen for the scroll event on the window
    window.addEventListener("scroll", function () {
      // Get the header height (100vh) in pixels
      const headerHeight = window.innerHeight;

      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check if the scroll position is greater than or equal to the header height
      if (scrollPosition >= headerHeight) {
        // If true, change the background color of the navbar to #90928D
        navbar.style.backgroundColor = "#90928D";
        brand.style.color = "white";
      } else {
        // If false, reset the background color of the navbar to its original color (white)
        navbar.style.backgroundColor = "white";
        brand.style.color = "black";
      }
    });
  });
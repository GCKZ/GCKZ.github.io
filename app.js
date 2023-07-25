document.addEventListener("DOMContentLoaded", function () {
    
    const h1Element = document.getElementById("header-h1");
    const pElement = document.getElementById("header-p");

    
    h1Element.style.opacity = "0";
    pElement.style.opacity = "0";

    
    function fadeInElements() {
      let opacity = 0;
      const interval = 50; 
      const targetOpacity = 1; 

      
      function increaseOpacity() {
        opacity += 0.1; 
        h1Element.style.opacity = opacity;
        pElement.style.opacity = opacity;

        
        if (opacity >= targetOpacity) {
          clearInterval(opacityInterval);
        }
      }

     
      const opacityInterval = setInterval(increaseOpacity, interval);
    }

  
    setTimeout(fadeInElements, 500);

  
    const navbar = document.getElementById("navbar");
    const brand = document.getElementById("brand");

    
    window.addEventListener("scroll", function () {
     
      const headerHeight = window.innerHeight;

      
      const scrollPosition = window.scrollY;

      
      if (scrollPosition >= headerHeight) {
        
        navbar.style.backgroundColor = "#90928D";
        brand.style.color = "white";
      } else {
        
        navbar.style.backgroundColor = "white";
        brand.style.color = "black";
      }
    });
  });
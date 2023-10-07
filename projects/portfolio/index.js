const nav = document.querySelector(".nav");

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 10) {
       
        
        nav.style.background = "black";
        
      
        
        

       
    } else {
        nav.style.background = "#000000a2";
        
    }
}

);

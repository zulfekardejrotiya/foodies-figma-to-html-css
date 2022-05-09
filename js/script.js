
// 
        
        function myfunction() {
            var x = document.getElementById("menu");
            if (x.style.display == "block") {
              x.style.display = "none";
            }
             else {
              x.style.display = "block";
            }
          }
// 



window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
})

    
  
    
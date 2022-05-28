let swapLeft = document.getElementById("swapLeft");
let controlSwapLeft = document.getElementById("controlSwapLeft");
let swapRight = document.getElementById("swapRight");

let control = 1;

controlSwapLeft.addEventListener('click', function() { 
    if(control > 0) {
        swapLeft.classList.add("swap_content");
        controlSwapLeft.classList.add("swap");
        swapRight.classList.remove("none-right-naw");
        control -= 1;
    }   else  if(control < 1) {
        swapLeft.classList.remove("swap_content");
        controlSwapLeft.classList.remove("swap");
        swapRight.classList.add("none-right-naw");
        control += 1;
    } 
  });


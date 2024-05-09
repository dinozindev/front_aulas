var pos = 0;
var posR = 0;


function mover() {
    var vermelho = document.getElementById("vermelho");
    var x = setInterval(incT, 5);
    var y;
    var z;
    var w;
    
    function incT() {     
        if (pos <= 650) {
            pos++;
            vermelho.style.top = `${pos}px`;
   
        } else {
            clearInterval(x);
            var y = setInterval(incR, 5);
        }  
    }
    
    function incR() {
        if (posR <= 650) {
            posR++;
            vermelho.style.left = `${posR}px`;
        } else {
            clearInterval(y);
            var z = setInterval(incB, 400);
        }  
    }
    
    function incB() {
        if (pos <= 651 && pos >= 0) {
            pos--
            vermelho.style.top = `${pos}px`
        } else {
            clearInterval(z);
            var w = setInterval(incL, 500)
        }  
    }

    function incL() {
        if (posR <= 651 && posR >= 0) {
            posR--
            vermelho.style.left = `${posR}px`
        } else {
            clearInterval(w);
        }  
    }

}



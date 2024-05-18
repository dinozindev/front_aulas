var pos = 0;
var x;
var y;

function incR() {
    if (pos < 1300) {
        pos++;
        cachorro.style.marginLeft= `${pos}px`
    }  else {
        clearInterval(x)
        andar()
    }
}

function incL() {
    if (pos > 0) {
        pos--;
        cachorro.style.marginLeft = `${pos}px`
    } else {
        clearInterval(y)
        andar()
    }
}

function andar() {
    const cachorro = document.getElementById("cachorro");
    if (cachorro.src.match("parado")) {
        cachorro.src="img/cachorro_andando_direita.gif";
        x = setInterval(incR, 2)
    } else if(cachorro.src.match("direita")) {
        cachorro.src="img/cachorro_andando_esquerda.gif";
        y = setInterval(incL, 2)
    } else if(cachorro.src.match("esquerda")) {
        cachorro.src="img/cachorro_parado.gif";
    }
}
function trocar() {
    var lampada = document.getElementById("minhaLampada")
    if (lampada.src.match("bulbon")) {
        lampada.src="img/pic_bulboff.gif";
    } else {
        lampada.src="img/pic_bulbon.gif";
    }
}

function mudarCor1() {
    var minhaDiv1 = document.getElementById("minhaDiv1");

    // if else
    // if (minhaDiv1.style.backgroundColor == 'yellow') {
    //     minhaDiv1.style.backgroundColor = 'red'
    // } else {
    //     minhaDiv1.style.backgroundColor = 'yellow'
    // }

    // operador ternario
    minhaDiv1.style.backgroundColor = minhaDiv1.style.backgroundColor == 'yellow' ? 'red' : 'yellow';
}

function mudarCor2() {
    var minhaDiv2 = document.getElementById("minhaDiv2");
    // operador ternario
    minhaDiv2.style.backgroundColor = minhaDiv2.style.backgroundColor == 'yellow' ? 'red' : 'yellow';
}

var x;

function intervalCor() {
    x = setInterval(mudarCor2, 1000)
}

function pararInterval() {
    clearInterval(x)
}

function HX() {
    valor = parseInt(Math.random() * 255).toString(16).padStart(2,0);
    return valor;
}

function mudarCor3() {
    var cores = `#${HX()}${HX()}${HX()}`
    document.body.style.backgroundColor = cores;
}
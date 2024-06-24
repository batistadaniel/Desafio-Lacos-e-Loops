document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    soma();
});

function soma() {
    let numero = document.getElementById("numero").value;
    let msg = document.getElementById("msg");
    let soma = 0;
    soma += numero;

    while (numero != "s") {
        numero = Number(document.getElementById("numero").value);
        soma += numero;
        break;
    }

    msg.textContent = `A soma é ${soma}`;
}

// do {
//     soma += i;
//     i++;
// } 
// while (i <= numero);
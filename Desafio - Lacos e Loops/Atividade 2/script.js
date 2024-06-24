// function tabuada(numero, msg) {
//     // numero = Number(document.getElementById("numero").value);
//     // msg = document.getElementById("msg");

//     msg.textContent = ""; 
//     msg.style.display = "flex";

//     for (let i = 1; i <= 10; i++) {
//         if ( !isNaN(numero)) {
//             msg.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
//         } else if(isNaN(numero)) {
//             msg.innerHTML = "Digite um número válido";
//             document.getElementById("numero").value = "";
//         } else if(numero < 0 || numero == null) {
//             msg.style.display = "none";
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("resposta").addEventListener("submit", function(event) {
//         event.preventDefault();
//         let numero = Number(document.getElementById("numero").value);
//         let msg = document.getElementById("msg");

//         tabuada(numero, msg);
//     });
// });

function tabuada(numero, msg) {
    // Limpa a mensagem e exibe o elemento msg
    msg.textContent = "";
    msg.style.display = "flex";

    // Verifica se o número é válido e não é vazio ou contém apenas espaços em branco
    if (!isNaN(numero) && numero.trim() !== "") {
        for (let i = 1; i <= 10; i++) {
            msg.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
        }
    } else if (numero.trim() === "") {
        // Esconde a mensagem se o número é vazio ou contém apenas espaços em branco
        msg.style.display = "none";
    } else {
        // Exibe mensagem de erro para entrada inválida
        msg.innerHTML = "Digite um número válido";
        document.getElementById("numero").value = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resposta").addEventListener("submit", function(event) {
        event.preventDefault();
        let numero = document.getElementById("numero").value;
        let msg = document.getElementById("msg");

        tabuada(numero, msg);
    });
});


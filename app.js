// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar entrada: no vacío, no solo números o símbolos
    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
    if (nombre === '' || !nombreValido) {
        alert('Por favor, inserte un nombre válido (solo letras y espacios).');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    document.getElementById('resultado').innerHTML = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;

    // Preguntar si desea continuar jugando
    const continuar = confirm('¿Desea seguir jugando?');
    if (continuar) {
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
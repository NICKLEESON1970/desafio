// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre válido.'); // ✔ Validar entrada
        return;
    }

    amigos.push(nombre); // ✔ Agregar nombres
    input.value = '';
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // ✔ Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // ✔ Crear elementos <li>
        li.textContent = amigos[i];
        lista.appendChild(li); // ✔ Visualizar la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.'); // ✔ Validar que haya amigos
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length); // ✔ Generar un índice aleatorio
    const amigoSecreto = amigos[indice]; // ✔ Obtener el nombre sorteado

    document.getElementById('resultado').innerHTML = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`; // ✔ Mostrar el resultado
}
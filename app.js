let arrayAmigos = [];

function agregarAmigo(){
    const nombre = document.getElementById('amigo').value;

    if(nombre === ""){
        alert("Por favor, ingrese un nombre.");
    } else{
        arrayAmigos.push(nombre);
        actualizarListaAmigos();
        document.getElementById('amigo').value = '';
    }
}

function actualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < arrayAmigos.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = `${i + 1}. ${arrayAmigos[i]}`;
        listaAmigos.appendChild(listItem);
    }
}

function sortearAmigo(){
    if(arrayAmigos.length === 0){
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);

    const amigoSorteado = arrayAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`
}
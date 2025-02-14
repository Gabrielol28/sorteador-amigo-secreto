//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.")
    } else {
        listaDeAmigos.push(nomeAmigo);
        exibirListaAmigos();
    }
    console.log(listaDeAmigos);
    document.getElementById("amigo").value = ""; 
}

function exibirListaAmigos() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar se há amigos na lista
    if (listaDeAmigos.length === 0) {
        alert("Por favor insira um nome válido!");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obter o nome do amigo sorteado
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Limpar a lista de amigos exibida
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    // Mostrar o resultado
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    
    // Limpar a lista de amigos
    listaDeAmigos.splice(0, listaDeAmigos.length);

    // Limpar o campo de entrada
    document.getElementById("amigo").value = "";

    // Limpar a lista de amigos exibida
    exibirListaAmigos();

}
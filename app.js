// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome ao array
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    // Verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);
    document.getElementById('amigo').value = '';  // Limpa o campo de texto
    mostrarLista();  // Exibe a lista atualizada de amigos
}

// Função para exibir a lista de amigos
function mostrarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';  // Limpa a lista para não duplicar os nomes

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;  // Adiciona o nome na lista
        listaElement.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado do sorteio
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

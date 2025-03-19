//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const name = input.value.trim();

    if (name === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    friends.push(name);
    updateFriendList();
    input.value = ''; // Limpa o campo após adicionar
}

function updateFriendList() {
    const list = document.getElementById('listaAmigos');
    list.innerHTML = ''; // Limpa a lista atual

    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}

function sortearAmigo() {
    const resultList = document.getElementById('resultado');
    
    if (friends.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    
    // Limpa o resultado anterior e adiciona o novo como um item de lista
    resultList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${selectedFriend}`;
    resultList.appendChild(li);
}
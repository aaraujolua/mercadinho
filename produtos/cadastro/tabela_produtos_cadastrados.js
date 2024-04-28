let lista = obterListaProdutos();
construirTabela(lista);

function obterListaProdutos() {
  let listaProdutos = [
    {
      id: 1,
      nome: "Aaaa",
      quantidade: 5,
      preco: 50.0
    },
    {
      id: 2,
      nome: "Bbbb",
      quantidade: 10,
      preco: 100.0
    },
    {
      id: 3,
      nome: "Cccc",
      quantidade: 20,
      preco: 250.0
    },
  ];

  return listaProdutos;
}

function construirTabela(listaProdutos) {
  const tbody = document.querySelector('#tbody');

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  if (listaProdutos.length == 0) {
    let paragraph = document.createElement('p');
    paragraph.innerText = "Nenhum produto encontrado!";
    tbody.appendChild(paragraph);
    return;
  }

  for (let i = 0; i < listaProdutos.length; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `tr${i}`);
    tbody.appendChild(tr);

    let row = document.querySelector(`#tr${i}`);

    if (i % 2 == 0) {
      row.setAttribute('class', 'linha-par');
    } else {
      row.setAttribute('class', 'linha-impar');
    }

    let td_id = document.createElement('td');
    let td_nome = document.createElement('td');
    let td_quantidade = document.createElement('td');
    let td_preco = document.createElement('td');

    td_id.innerText = listaProdutos[i].id;
    td_nome.innerText = listaProdutos[i].nome;
    td_quantidade.innerText = listaProdutos[i].quantidade;
    td_preco.innerText = listaProdutos[i].preco;

    row.appendChild(td_id);
    row.appendChild(td_nome);
    row.appendChild(td_quantidade);
    row.appendChild(td_preco);
  }
}

function buscarProduto() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let lista = obterListaProdutos();
  let listaFiltrada = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nome.toLowerCase().includes(input)) {
      listaFiltrada.push(lista[i]);
    }
  }

  construirTabela(listaFiltrada);
}
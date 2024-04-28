let lista = obterListaProdutos();
construirTabela(lista);

/*
  <th>CÓDIGO</th>
  <th>PRODUTO</th>
  <th>DATA DA ENTRADA</th>
  <th>QTD COMPRADA</th>
  <th>PREÇO UNITÁRIO</th>
  <th>VALOR DA COMPRA</th>
*/

function obterListaProdutos() {
  let listaProdutos = [
    {
      id: 1,
      nome: "Aaaa",
      data: new Date(),
      quantidade: 5,
      preco: 50.0
    },
    {
      id: 2,
      nome: "Bbbb",
      data: new Date(),
      quantidade: 10,
      preco: 100.0
    },
    {
      id: 3,
      nome: "Cccc",
      data: new Date(),
      quantidade: 20,
      preco: 250.0
    },
  ];

  atribuirValorTotal(listaProdutos);

  return listaProdutos;
}

function atribuirValorTotal(listaProdutos) {
  for (let i = 0; i < listaProdutos.length; i++) {
    listaProdutos[i].valorTotal = (listaProdutos[i].quantidade * listaProdutos[i].preco);
  }
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
    let td_data = document.createElement('td');
    let td_quantidade = document.createElement('td');
    let td_preco = document.createElement('td');
    let td_valor_total = document.createElement('td');

    td_id.innerText = listaProdutos[i].id;
    td_nome.innerText = listaProdutos[i].nome;
    td_data.innerText = listaProdutos[i].data;    
    td_quantidade.innerText = listaProdutos[i].quantidade;
    td_preco.innerText = listaProdutos[i].preco;
    td_valor_total.innerText = listaProdutos[i].valorTotal;

    row.appendChild(td_id);
    row.appendChild(td_nome);
    row.appendChild(td_data);
    row.appendChild(td_quantidade);
    row.appendChild(td_preco);
    row.appendChild(td_valor_total);
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
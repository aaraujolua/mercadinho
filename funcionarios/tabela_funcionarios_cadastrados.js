let lista = obterListaFuncionarios();
construirTabela(lista);

function obterListaFuncionarios() {
  let listaFuncionarios = [
    {
      nome: "Aaaaaa Aaaa",
      email: "email@email",
      contato: "(XX) XXXXX-XXXX",
      status: "desativado"
    },
    {
      nome: "Bbbbbb Bbbb",
      email: "email@email",
      contato: "(XX) XXXXX-XXXX",
      status: "ativo"
    },
    {
      nome: "Cccccc Cccc",
      email: "email@email",
      contato: "(XX) XXXXX-XXXX",
      status: "ativo"
    },
  ];

  return listaFuncionarios;
}

function construirTabela(listaFuncionarios) {
  const tbody = document.querySelector('#tbody');

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  if (listaFuncionarios.length == 0) {
    let paragraph = document.createElement('p');
    paragraph.innerText = "Nenhum(a) funcionário(a) encontrado(a)!";
    tbody.appendChild(paragraph);
    return;
  }

  for (let i = 0; i < listaFuncionarios.length; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `tr${i}`);
    tbody.appendChild(tr);

    let row = document.querySelector(`#tr${i}`);

    if (i % 2 == 0) {
      row.setAttribute('class', 'linha-par');
    } else {
      row.setAttribute('class', 'linha-impar');
    }

    let td_nome = document.createElement('td');
    let td_email = document.createElement('td');
    let td_contato = document.createElement('td');
    let td_status = document.createElement('td');
    let span = document.createElement('span');
    let textoStatus = document.createElement('div');
    let td_edicao = document.createElement('td');
    let botao_edicao = document.createElement('button');
    let funcionarioAtual = listaFuncionarios[i];

    td_status.setAttribute('class', 'status');

    if (listaFuncionarios[i].status == "ativo") {
      span.setAttribute('class', 'material-icons ativo');
    } else {
      span.setAttribute('class', 'material-icons desativado');
    }
    span.innerText = "circle";
    td_status.appendChild(span);
    textoStatus.innerText = listaFuncionarios[i].status.toUpperCase();
    td_status.appendChild(textoStatus);
    
    botao_edicao.innerText = "Editar";
    botao_edicao.setAttribute('class', 'botao-editar');
    botao_edicao.onclick = () => {
      // TODO
      console.log('Funcionário:', funcionarioAtual);
    };

    td_nome.innerText = listaFuncionarios[i].nome;
    td_email.innerText = listaFuncionarios[i].email;
    td_contato.innerText = listaFuncionarios[i].contato;

    td_edicao.appendChild(botao_edicao);
    row.appendChild(td_nome);
    row.appendChild(td_email);
    row.appendChild(td_contato);
    row.appendChild(td_status);
    row.appendChild(td_edicao);
  }
}

function buscarFuncionario() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let lista = obterListaFuncionarios();
  let listaFiltrada = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nome.toLowerCase().includes(input)) {
      listaFiltrada.push(lista[i]);
    }
  }

  construirTabela(listaFiltrada);
}
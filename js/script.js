const aleteraTema = document.querySelector(".alterar-tema");


// ALTERAR TEMA
aleteraTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro-variaveis');

    aleteraTema.querySelector('span:nth-child(1)').classList.toggle('active');
    aleteraTema.querySelector('span:nth-child(2)').classList.toggle('active');
});

// INSERIR PEDIDOS NA TABELA
// Pedidos.forEach(pedido => {
//     const tr = document.createElement('tr');
//     const trConteudo = `<td>${pedido.nomeProduto}</td>
//                         <td>${pedido.numeroProduto}</td>
//                         <td>${pedido.statusPagamento}</td>
//                         <td class="${pedido.envio === 'Devolvido' ? 'erro' 
//                         : pedido.envio === 'Pendente' ? 'alerta' 
//                         : pedido.envio === 'Enviado' ? 'sucesso'
//                         : 'primaria'}">${pedido.envio}</td>
//                         <td class="primaria">Detalhes</td>`

//     tr.innerHTML = trConteudo;
//     document.querySelector('table tbody').appendChild(tr);
// });

function exibirDados() {
    $.getJSON('pedidos.json', function (pedido) {
        debugger
        pedido.forEach(pedido => {
            const tr = document.createElement('tr');
            const trConteudo = `<td>${pedido.nomeProduto}</td>
                        <td>${pedido.numeroProduto}</td>
                        <td>${pedido.statusPagamento}</td>
                        <td class="${pedido.envio === 'Devolvido' ? 'erro' 
                        : pedido.envio === 'Pendente' ? 'alerta' 
                        : pedido.envio === 'Enviado' ? 'sucesso'
                        : 'primaria'}">${pedido.envio}</td>
                        <td class="primaria">Detalhes</td>`

            tr.innerHTML = trConteudo;
            document.querySelector('table tbody').appendChild(tr);
        });

    });
}
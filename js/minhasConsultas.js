window.addEventListener("load", () => {
    try {
        const id_cliente = localStorage.getItem("id_cliente");

        fetch('http://localhost:3000/listar-consultas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_cliente })
        })
            .then(async (response) => {
                let dados = await response.json();

                if (response.ok) {
                    preencherTabela(dados)
                } else {
                    console.log("Deu ruim");
                }
                return dados;
            });
    } catch (err) {
        return err
    }
});

function preencherTabela(dados) {
    const tabelaBody = document.getElementById('tabela-consulta').getElementsByTagName('tbody')[0];
    
    // Remove as linhas existentes, exceto o cabeçalho
    tabelaBody.innerHTML = '';
    
    // Cria as linhas da tabela com os dados recebidos
    dados.forEach(consulta => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${consulta.id_agenda || 'N/A'}</td>
            <td>${consulta.nome_pet || 'N/A'}</td>
            <td>${new Date(consulta.data).toLocaleDateString('pt-BR') || 'N/A'}</td>
            <td>${consulta.horario || 'N/A'}</td>
            <td>${consulta.detalhes || 'N/A'}</td>
            <td>${consulta.unidade || 'N/A'}</td>
        `;

        tabelaBody.appendChild(row);
    });
}
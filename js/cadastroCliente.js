btnCadastro.addEventListener("click", () => {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const cpf = document.querySelector('#cpf').value;

    try {
        fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, cpf })
        })
            .then(async (response) => {
                console.log(response);
                let dados = await response.json();

                if (response.ok) {
                    console.log(dados)
                } else {
                    console.log("Deu ruim");
                }
                return dados;
            });
    } catch (err) {
        return err
    }
});
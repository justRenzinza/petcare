// hover
const btnCadastro = document.querySelector("#btnCadastro");


// Isso daqui não existe no contexto do cadastro, o js vai compilar e dar como objeto undefined e o que tiver em baixo não vai ser executado

// document.querySelectorAll('.fotos-vet img').forEach(function(img) {
//     img.addEventListener('mouseover', function() {
//         this.classList.add('zoom');
//     });

//     img.addEventListener('mouseout', function() {
//         this.classList.remove('zoom');
//     });
// });

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



// document.getElementById('cadastroForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Impede o comportamento padrão de envio do formulário

//     // Coleta os dados do formulário
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const cpf = document.getElementById('cpf').value;

//     // Envia os dados para o backend usando fetch
//     fetch('http://localhost:3000/cadastro', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nome, email, senha, cpf })
//     })
//     .then(response => response.json())
//     .then(data => console.log('Cliente cadastrado com sucesso:', data))
//     .catch(error => console.error('Erro ao cadastrar cliente:', error));
// });

// fetch(request)
// .then(response => response.json())
// .then(data => console.log('Cliente cadastrado com sucesso:', data))
// .catch(error => console.error('Erro ao cadastrar cliente:', error));
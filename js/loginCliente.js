const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", () => {
    const senha = document.querySelector('#senha').value;
    const email = document.querySelector('#email').value;

    try {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ senha, email })
        })
            .then(async (response) => {
                let dados = await response.json();

                if (response.ok) {
                    localStorage.setItem("id_cliente", dados.id_cliente);
                    window.location.href = "/petcare-main/cadastrarpet.html" 
                } else {
                    console.log("Deu ruim");
                }
                return dados;
            });
    } catch (err) {
        return err
    }
});
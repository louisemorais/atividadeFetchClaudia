const rua = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const unidade = document.getElementById("numero");

function buscarCep() {
    const cep = document.getElementById("cep").value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            return response.json();
        })
        .then(dados => {
            rua.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            estado.value = dados.uf;
            unidade.value= dados.siafi
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
}
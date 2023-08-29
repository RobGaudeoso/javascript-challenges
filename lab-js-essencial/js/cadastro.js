//Recuperando o tbody
const tbody = document.querySelector("tbody");

//Pegar o formulário - cancelar o evento padrão - chamar a função
document.querySelector("form").addEventListener("submit", function (e) {
    //Cancelar o evento
    e.preventDefault();

    const campos = [
        document.querySelector("#usuario"),
        document.querySelector("#email"),
        document.querySelector("#dataCadastro"),
        document.querySelector("#tipoConta"),
    ];

    //Criar a tr que receberá os valores
    const tr = document.createElement("tr");

    //Percorrer o array para pegar as informações e criar a td
    campos.forEach((campo) => {
        //Criar uma td
        const td = document.createElement("td");

        //Pegar o valor do campo e passar para a td
        td.textContent = campo.value;

        //Atribuir a td ao elemento tr
        tr.appendChild(td);
    });

    //Inserir a tr no tbody
    tbody.appendChild(tr);

    //Limpar os campos do formulário
    this.reset();
});

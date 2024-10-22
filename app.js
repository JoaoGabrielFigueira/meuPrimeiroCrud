// FALSO BANCO DE DADOS DE CLIENTES
var clientes = []
var editandoCliente = null

function mostrarModal(){
    const modal = document.getElementById("modal")
    modal.style.display = "block"
}

function ocultarModal(){
    const modal = document.getElementById("modal")
    modal.style.display = "none"
}

function adicionar() {
    editandoCliente = null
    limparFormulario()
    mostrarModal()
}

function alterar(cpf) {

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf === cpf) {
            editandoCliente = i

            document.getElementById("nome").value = clientes[i].nome;
            document.getElementById("cpf").value = clientes[i].cpf;
            document.getElementById("peso").value = clientes[i].peso;
            document.getElementById("altura").value = clientes[i].altura;
            document.getElementById("data").value = clientes[i].dataNascimento;
            mostrarModal()
            break
        }
        
    }
    mostrarModal()
    
}

function excluir(cpf) {
    if (confirm("Deseja realmente destruir esse body builder?")) {

        for (let i = 0; i < clientes.length; i++) {
            const cliente = clientes[i];
            if (cliente.cpf == cpf) {
                clientes.splice(i, 1)
                alert("Excluido com sucesso")
                atualizarLista()
            }
            
        }

        
    }
}

function salvar() {
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let dataNascimento = document.getElementById("data").value

    let novoBodyBuilder = {
        nome: nome, 
        cpf: cpf,
        peso: peso,
        altura: altura,
        dataNascimento: dataNascimento
    }

    if (editandoCliente === null) {
        clientes.push(novoBodyBuilder)
        alert("Cadastrado com sucesso")
        
    }else{
        clientes[editandoCliente] = novoBodyBuilder
        alert("Cadastrado com sucesso")
        editandoCliente = null
    }

    
    ocultarModal()

    limparFormulario()

    atualizarLista()    
    return false
}

function atualizarLista(){

    let tbody = document.getElementsByTagName("tbody")[0]
    tbody.innerHTML = ""

    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];
        
        let linhaTabela = document.createElement("tr")
        linhaTabela.innerHTML = `
        
                <td>${cliente.cpf}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.peso}Kg</td>
                <td>${cliente.altura}m</td>
                <td>${cliente.dataNascimento}</td>
                <td>
                    <button onclick="alterar('${cliente.cpf}')">Alterar</button>
                    <button onclick="excluir('${cliente.cpf}')">Excluir</button>
                </td>`

        tbody.appendChild(linhaTabela)
    }

}

function limparFormulario(){
    document.getElementById("nome").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("data").value = ""
}


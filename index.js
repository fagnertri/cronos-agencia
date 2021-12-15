// Importando o arquivo cursos.json (Sem uso por enquanto)
// let cursos = require("./cursos.json");

// Criando a variável que armazena as informações dos cursos (1 array[] com vários objetos{})
let cursos = 
    [{
        nome: "Desenvolvimento Web",
        imagem: "imagens/ilustra-web.png",
        descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome: "Marketing Digital",
        imagem: "imagens/ilustra-marketing.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome:"Consultoria UX",
        imagem: "imagens/ilustra-ux.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome: "Teste 1",
        imagem: "imagens/ilustra-marketing.png",
        descricao:"Teste Teste Teste."
    }];


// Estruturando a função que exibe os cursos
function exibirCursos() {
    // Criando a variável que recebe a estrutura HTML do painel
    let htmlCursos = "";

    // Para cada item dentro da variável cursos, é criado uma linha da tabela HTML
    for (let i = 0; i < cursos.length; i++) {
        htmlCursos += `
            <tr>
                <td>${cursos[i].nome}</td>
                <td><img src=${cursos[i].imagem} class="img-fluid" /></td>
                <td>${cursos[i].descricao}</td>
                <td>
                    <button class="btn btn-secondary m-1">editar</button>
                    <button class="btn btn-danger m-1">excluir</button>
                </td>
            </tr>
        `    
    }
    // Criando variável com o texto HTML a ser adicionado no painel
    let painelCursos = document.querySelector("#painel-cursos")

    // Inserindo o texto que foi gerado na função exibirCursos() dentro do elemento de id #painel-cursos
    painelCursos.innerHTML = htmlCursos;
}

// Chamando a função para exibir os cursos
exibirCursos();


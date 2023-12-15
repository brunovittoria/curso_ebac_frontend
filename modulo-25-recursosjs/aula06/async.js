//1° Exercício: Crie uma função baixarArquivo que simula o download de um arquivo após 2 segundos. Use um callback para exibir a mensagem "Arquivo baixado com sucesso!" após o download.

function baixarArquivo(callback) {
    // Simula uma operação assíncrona
        setTimeout(function() {
            console.log("Download concluído!");
            callback();
        }, 2000);
    }

  // Usando um callback
baixarArquivo(function() {
    console.log("Arquivo baixado com sucesso!");
});

//2° Exercício: Modifique a função baixarArquivo para retornar uma Promise em vez de usar um callback. Em seguida, use then para exibir a mensagem de sucesso e catch para lidar com erros.

function baixarArquivo2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        console.log("Operação concluída!");
        resolve();
        }, 1000);
    });
}

  // Usando Promises
    baixarArquivo2()
    .then(function() {
        console.log("Mensagem de Sucesso!");
    })
    .catch(function(error) {
        console.error("Erro na promessa:", error);
    });

//3° Exercício: Refatore a função baixarArquivo para usar async/await. Crie uma nova função chamada executarDownload que chama baixarArquivo e exibe a mensagem de sucesso após o download.

async function baixarArquivo3() {
    return new Promise(function(resolve) {
      // Simula uma operação assíncrona
        setTimeout(function() {
        console.log("Refatorando funçao para async await");
        resolve();
        }, 1000);
    });
}

  // Usando Async/Await
async function executarDownload() {
    console.log("Iniciando operação assíncrona...");
    await baixarArquivo3();
    console.log("Sucesso no download!");
}

executarDownload();

//4°Exercício: Crie uma função que utiliza setTimeout para exibir a contagem regressiva a partir de 5 segundos até 1 segundo. Utilize Promises ou Callbacks para garantir a ordem correta da contagem.

function contagemRegressiva() {
        let segundos = 5;

        function iniciarContagem() {
            if (segundos === 0) {
            console.log("Tempo esgotado!");
            } else {
            console.log(`${segundos} segundos restantes...`);
            segundos--;
            setTimeout(iniciarContagem, 1000);
            }
        }

        iniciarContagem();
    }
contagemRegressiva();


//5°Exercício: Exercício: Utilize a API Fetch para fazer uma requisição GET a um serviço de dados (por exemplo, JSONPlaceholder) e exiba os resultados. Manipule tanto com Promises quanto Async/Await.

function fazerRequisicao() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
        console.log('Dados da requisição:', data);
        })
        .catch(error => {
        console.error('Erro na requisição:', error);
        });
    }
    fazerRequisicao();



// import
const http = require('http');
const axios = require('axios');

// função para lidar com as requisições
const requestMain = (request, response) => {
    // URL da api que queremos acesar
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // fazendo uma requisição HTTP GET com API
    axios.get(apiUrl)
        .then((apiResponse) => {
            // configurando o cabeçalho da resposta
            response.writeHead(200, {'Content-Type': 'text/plain'});

            //Exibindo os dados retornados na resposta
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`) 
        })

        .catch((error) => {
            console.error('Erro ao acessar a API');
        })
}

//Criando seridor
const Server = http.createServer(requestMain);

// Definindo a porta
const PORT = 3000;

//iniciando o servidor e ouvindo a porta definiida
Server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
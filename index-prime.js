// import a biblioteca axios
const axios = require('axios');

// URL api que queremos acessar
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Requisição HTTP GET API usando o axios 
axios.get(apiUrl)
            .then((response) => {
                //Exiba os dados retornados no console
                console.log(response);
            })
            .catch((error) => {
                // Em caso e erro, exiba o erro no console
                console.error('Erro ao acessar a API:' ,error);
            })
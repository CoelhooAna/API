const chalk = require('chalk');
const inquirer = require('inquirer');

//função principal que excuta
function main() {
    console.log("olá")
    console.log(chalk.bgRed.white('Bem vindo ao questionario'));

    // Perguntar ao usuário seu nome
    inquirer.prompt({
        name: 'name',
        message: 'Qual é seu nome?'
    })
    //Promise - Javascript
    .then((nomeResponder) => {
        //Pergunta ao usuário sua idade
        return inquirer.prompt({
            name: 'age',
            message: 'Quantos anos você tem?'
        })
        .then((idadeResponder)=>{

            //imprimir mensagem na tela
            console.log(chalk.bgRed.black(`Olá ${nomeResponder.name}! Você tem ${idadeRespnder.age} anos`))
        })
    })
}

main();
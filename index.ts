import * as readline from 'readline-sync';
import { sistemaHemocentro } from './SistemaHemocentro';


const hemocentro = new sistemaHemocentro();
/*============ MENU  ==================*/

var contador: boolean = true;

while (contador) {
    console.log("========= Sistema de cadastro =========")
    console.log(`1 - Cadastrar doador -`);
    console.log(`2 - Listar de doadores -`);
    console.log(`3 - Buscar doador pelo tipo sanguineo -`);
    console.log(`4 - Buscar doador por data -`);
    console.log(`5 - Finalizar ficha -`);

    const opcao = readline.question(`Escolher opções de 1 a 5... `);

    switch (opcao) {
        case "1":
            console.log("--- Cadastro de usuario ---");
            hemocentro.cadastro();
            console.log("---------------------------");
            break;
        case "2":
            console.log("--- Lista de doadores ---")
            hemocentro.listarDoadores();
            console.log("---------------------------");
            break;
        case "3":
             console.log("--- Buscar por tipo sanguineo ---")
            hemocentro.buscarPorTipoSanguineo();
            console.log("---------------------------");
            ; break;
        case "4":       
            console.log("--- Buscar por data: exemplo 00/00/0000 ---")
            hemocentro.buscarPorDataUltimaDoacao();
            console.log("---------------------------");
            break;
        case "5":
            console.log("--- Até mais! ---")
            console.log(`Sair`)
            console.log("---------------------------");
            contador = false;
    }
}



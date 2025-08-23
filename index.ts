import * as readline from 'readline-sync';
import { sistemaHemocentro } from './SistemaHemocentro';


const hemocentro = new sistemaHemocentro();
/*============ MENU  ==================*/

var contador: boolean = true;

while (contador) {
    console.log(`1 - Cadastrar doador -`);
    console.log(`2 - Listar de doadores -`);
    console.log(`3 - Buscar doador pelo tipo sanguineo -`);
    console.log(`4 - Buscar doador por data -`);
    console.log(`5 - Finalizar ficha -`);

    const opcao = readline.question(`Escolher opções de 1 a 5... `);

    switch (opcao) {
        case "1":
            hemocentro.cadastro();
            break;
        case "2":
            hemocentro.listarDoadores();
            break;
        case "3":
            hemocentro.buscarPorTipoSanguineo();
            ; break;
        case "4":
            hemocentro.buscarPorDataUltimaDoacao();
            break;
        case "5":
            console.log(`Sair`)
            contador = false;
    }
}



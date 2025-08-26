import * as readline from 'readline-sync';
import { Doador } from './Doador';

export class sistemaHemocentro {

  public doadores: Doador[] = [];
  public sanguesugas: string[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  public cadastro(): void { ////// Metodo para cadastro!



    let nome: string = readline.question(`Nome do doador? `).toUpperCase();
    let idade: number = Number(readline.question(`Qual sua idade? `).toUpperCase());
    let peso: number = Number(readline.question(`Peso do doador? `).toUpperCase());
    let Tipossanguineo: string = readline.question(`Tipo sanguineo do doador? `).toUpperCase();
    const tem = this.sanguesugas.find(item => item === Tipossanguineo)

    if (tem != undefined) {
      console.log("Tipo sanguineo cadastrado!");
      let dataDoacao: string = String(readline.question(`Qual data de doação? 00/00/0000: `).toUpperCase());

      const novoDoador = new Doador(nome, idade, peso, Tipossanguineo, dataDoacao);
      this.doadores.push(novoDoador);
      console.log(`Doador cadastrado com sucesso!`);
    } else {
      console.log("Tipo sanguineo não encontrado!");
    }

  }

  public listarDoadores(): void {   //// Metodo para listar Doadores!
    console.log('------------------------\nRESULTADO DA BUSCA:\n------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');
    for (const doador of this.doadores) {
      console.log(doador.mostrarInfo());
    }

  }
  public buscarPorTipoSanguineo(): void { //// Metodo para buscar sangue!!
    const tipoSanguineo = readline.question('Digite o tipo sanguíneo desejado: ').toUpperCase();
    console.log('------------------------\nRESULTADO DA BUSCA:\n------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');
    for (const doador of this.doadores) {
      if (doador.getTipoSanguineo() === tipoSanguineo) {
        console.log(doador.mostrarInfo());
      }
    }
    console.log('-----------------------------------------------------------------');
  }

  public buscarPorDataUltimaDoacao(): void { ///// Buscar data da ultima doação!
    const data = readline.question('Digite a data que deseja: ').toUpperCase();
    console.log('------------------------\nRESULTADO DA BUSCA:\n------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');
    for (const doador of this.doadores) {
      if (doador.getDataUltimaDoacao() === data) {
        console.log(doador.mostrarInfo());
      } else {
        console.log("Nenhuma data encontrada!")
      }
    }
    console.log('-----------------------------------------------------------------');
  }
}
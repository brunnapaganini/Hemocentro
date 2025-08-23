class SistemaHemocentro {
  private doadores: Doador[] = [];

  // Método para cadastrar um novo doador
  public cadastrarDoador(): void {
    const nome = readlineSync.question('Nome do doador: ');
    const idade = parseInt(readlineSync.question('Idade do doador: '));
    const peso = parseFloat(readlineSync.question('Peso do doador: '));
    const tipoSanguineo = readlineSync.question('Tipo sanguíneo do doador: ');
    const dataUltimaDoacao = readlineSync.question('Data da última doação (dd/mm/aaaa): ');

    const doador = new Doador(nome, idade, peso, tipoSanguineo, dataUltimaDoacao);
    this.doadores.push(doador);

    console.log('Doador cadastrado com sucesso!');
  }

  // Método para listar todos os doadores
  public listarDoadores(): void {
    console.log('--------------------\nLISTAGEM DE DOADORES:\n--------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');
    for (const doador of this.doadores) {
      console.log(doador.mostrarInfo());
    }
    console.log('-----------------------------------------------------------------');
  }

  // Método para buscar doadores por tipo sanguíneo
  public buscarPorTipoSanguineo(): void {
    const tipoSanguineo = readlineSync.question('Digite o tipo sanguíneo desejado: ');
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

  // Método para buscar doadores por data da última doação
  public buscarPorDataUltimaDoacao(): void {
    const data = readlineSync.question('Digite a data desejada (dd/mm/aaaa): ');

    console.log('------------------------\nRESULTADO DA BUSCA:\n------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');
    for (const doador of this.doadores) {
      if (this.comparaDatas(doador.getDataUltimaDoacao(), data)) {
        console.log(doador.mostrarInfo());
      }
    }
    console.log('-----------------------------------------------------------------');
  }

  // Método auxiliar para comparar datas
  private comparaDatas(dataDoador: string, dataBuscada: string): boolean {
    const [diaDoador, mesDoador, anoDoador] = dataDoador.split('/').map(Number);
    const [diaBuscada, mesBuscada, anoBuscada] = dataBuscada.split('/').map(Number);

    const dataDoadorFormatada = new Date(anoDoador, mesDoador - 1, diaDoador);
    const dataBuscadaFormatada = new Date(anoBuscada, mesBuscada - 1, diaBuscada);

    return dataDoadorFormatada < dataBuscadaFormatada;
  }
}

// Função para exibir o menu principal
function exibirMenu(): void {
  console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====');
  console.log('1. Cadastrar doador');
  console.log('2. Listar doadores');
  console.log('3. Buscar doador por tipo sanguíneo');
  console.log('4. Buscar doador por data da última doação');
  console.log('5. Sair');
}

// Função principal para rodar o sistema
function iniciarSistema(): void {
  const sistema = new SistemaHemocentro();

  let opcao: number;
  do {
    exibirMenu();
    opcao = parseInt(readlineSync.question('Escolha uma opção: '));

    switch (opcao) {
      case 1:
        sistema.cadastrarDoador();
        break;
      case 2:
        sistema.listarDoadores();
        break;
      case 3:
        sistema.buscarPorTipoSanguineo();
        break;
      case 4:
        sistema.buscarPorDataUltimaDoacao();
        break;
      case 5:
        console.log('Saindo...');
        break;
      default:
        console.log('Opção inválida! Tente novamente.');
    }
  } while (opcao !== 5);
}

// Iniciar o sistema
iniciarSistema();

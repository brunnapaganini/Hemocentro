import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa{
    protected tipoSanguineo:string;
    protected dataUltimaDoacao:string;

    constructor(nome:string,idade:number,peso:number,tipoSanguineo:string,dataUltimaDoacao:string){
        super(nome,idade,peso)
        this.tipoSanguineo = tipoSanguineo;
        this.dataUltimaDoacao = dataUltimaDoacao
    }

    mostrarInfo():string{
        return `${this.nome} | ${this.idade} | ${this.peso} | ${this.tipoSanguineo} | ${this.dataUltimaDoacao}`
    }

    getTipoSanguineo():string{
        return this.tipoSanguineo
    }

    getDataUltimaDoacao():string{
        return this.dataUltimaDoacao
    }
}
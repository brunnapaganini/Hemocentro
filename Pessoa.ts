import { Doador } from "./Doador";
export class Pessoa {
    protected nome:string;
    protected idade:number;
    protected peso:number;

    constructor(nome:string, idade:number, peso:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }

    mostrarInfo():string{ ///// Metodo para mostrar informações de Doador
        return `${this.nome} | ${this.idade} | ${this.peso}`
    }

    getNome():void{
        console.log(this.nome)
    }

    getIdade():void{
        console.log(this.idade)
    }

    getPeso():void{
        console.log(this.peso)
    }
}
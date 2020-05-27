import { Acessorio } from './acessorio.model';
export interface Carro {
    key?: string;
    nome: string;
    preco: number;
    fotos?: Array<string>;
    acessorios?: Array<Acessorio>;
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private numeroAleatorio: number = 0;

  getNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  setNumeroAleatorio(numero: number) {
    this.numeroAleatorio = numero;
  }

  getNumeroAleatorioValor(): number {
    return this.numeroAleatorio;
  }
}

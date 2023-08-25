import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random-number',
  template: `
    <button (click)="generateRandomNumber()">Gerar Número Aleatório</button>
  `
})
export class RandomNumberComponent {

  constructor(private dataService: DataService) {}

  generateRandomNumber() {
    const numeroAleatorio = this.dataService.getNumeroAleatorio();
    this.dataService.setNumeroAleatorio(numeroAleatorio);
  }
}

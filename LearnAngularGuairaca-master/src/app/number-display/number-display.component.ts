import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-number-display',
  template: `
    <p>Número Aleatório: {{ numeroAleatorio }}</p>
  `
})
export class NumberDisplayComponent {

  constructor(private dataService: DataService) {}

  get numeroAleatorio(): number {
    return this.dataService.getNumeroAleatorioValor();
  }
}

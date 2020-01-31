import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor = 5;

  deletarCiclo = false;

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  mudarValor() {
    this.valor++;
  }
}

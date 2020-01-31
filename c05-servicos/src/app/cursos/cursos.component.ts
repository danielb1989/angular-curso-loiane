import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  // Injeção de Dependencia (DI) abaixo
  constructor(private cursosService: CursosService) {
    // A forma abaixo não é a melhor maneira pois toda vez que a classe for instanciada, é necessário
    // passar qualquer parametro que o construtor da classe necessitar, por isso é necessário usar 
    // a injeção de dependência - DI.

    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService;

    // Para usar a injeção de dependência, é necessário usar 
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    console.log(this.cursosService.servicoTesteDaniel(3));

  }

}

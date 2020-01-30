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

  // Injeção de Dependencia (DI)
  constructor(private cursosService: CursosService) {
    // Dessa forma não é bom, pois toda vez que
    // a classe for instanciada, é necessário
    // passar qualquer parametro através do construtor
    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService;

  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}

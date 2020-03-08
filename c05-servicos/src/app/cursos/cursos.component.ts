import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  // Caso queira uma instância do serviço separada, para cada componente, declare abaixo
  // PS.: Aparecerão dois logs do serviço no console
  // providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  // Injeção de Dependencia (DI) abaixo
  constructor(private cursosService: CursosService) {
    // A forma abaixo (sem a DI) não é a melhor maneira pois toda vez que a classe for instanciada, 
    // é necessário passar qualquer parametro que o construtor da classe necessitar, por isso é 
    // necessário usar a injeção de dependência - DI.
    // this.cursosService = new CursosService();
    // this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe(
      // Usando arrow function
      curso => console.log(curso)

      // function(curso){
      //  console.log(curso);
      // }
    );

    console.log(this.cursosService.servicoTesteDaniel(3));

  }

}

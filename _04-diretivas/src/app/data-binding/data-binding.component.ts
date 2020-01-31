import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `.highlight {
      background-color: yellow;
      font-weight: bold;
    }`
  ]
})
export class DataBindingComponent implements OnInit {

  // Aula 10
  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'https://i.picsum.photos/id/723/200/300.jpg';

  // Aula 11
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  // Aula 13
  nomeDoCurso = 'Angular';

  // Aula 14
  valorInicial = 15;

  // Aula 14
  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {

  }

}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable() 
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ["Angular", "Java", "Phonegap"];

    constructor() {
        console.log('CursosService - ' + new Date().toLocaleString());
    }

    getCursos() {
        // return ["Angular", "jQuery", "Java", "Phonegap"];
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

    servicoTesteDaniel(a: number = null) {
        if(a) {
            return a * 4 + 245 * 3;
        }
    }

}
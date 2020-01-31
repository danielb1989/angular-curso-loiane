import { Injectable } from '@angular/core';

@Injectable() 
export class CursosService {

    private cursos: string[] = ["Angular", "Java", "Phonegap"];

    constructor() {
        console.log('CursosService - ' + new Date().toLocaleString());
    }

    getCursos() {
        // return ["Angular", "jQuery", "Java", "Phonegap"];
        return this.cursos;
    }

    addCurso(curso: string) {
        return this.cursos.push(curso);
    }

    servicoTesteDaniel(a: number = null) {
        if(a) {
            return a * 4 + 245 * 3;
        }
    }

}
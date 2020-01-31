import { Injectable } from '@angular/core';

@Injectable() 
export class CursosService {

    constructor() {
        console.log('CursosService');
    }

    getCursos() {
        return ["Angular", "jQuery", "Java", "Phonegap"];
    }

    servicoTesteDaniel(a: number = null) {
        if(a) {
            return a * 4 + 245 * 3;
        }
    }

}
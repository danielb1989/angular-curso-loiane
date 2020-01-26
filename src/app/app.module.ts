import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MeuFormModule } from './meu-form';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding';
// import { MeuFormComponent } from './meu-form/meu-form.component';
import { InputPropertyComponent } from './input-property';
import { OutputPropertyComponent } from './output-property';
import { CicloComponent } from './ciclo';
import { DiretivaNgifComponent } from './diretiva-ngif';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    // MeuFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

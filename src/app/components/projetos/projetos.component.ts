import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-projetos',
  styleUrl: './projetos.scss',
  templateUrl: './projetos.html',
  imports: [NgIcon],
  providers: [provideIcons({})],
})
export class ProjetosComponent {}

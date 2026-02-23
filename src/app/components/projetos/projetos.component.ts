import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';

@Component({
  selector: 'app-projetos',
  styleUrl: './projetos.scss',
  templateUrl: './projetos.html',
  imports: [NgIcon, ProjetoCardComponent],
  providers: [provideIcons({})],
})
export class ProjetosComponent {}

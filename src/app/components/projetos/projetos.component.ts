import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projetos',
  styleUrl: './projetos.scss',
  templateUrl: './projetos.html',
  imports: [NgIcon, ProjetoCardComponent],
  providers: [provideIcons({})],
})
export class ProjetosComponent {
  tSer = inject(TranslationService);
}

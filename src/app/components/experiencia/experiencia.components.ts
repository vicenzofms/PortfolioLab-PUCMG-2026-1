import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experiencia',
  styleUrl: './experiencia.scss',
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent {
  tSer = inject(TranslationService);
}

import { Component, inject } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-sobre-mim',
  styleUrl: './sobre.scss',
  templateUrl: './sobre.html',
  imports: [ChipComponent],
})
export class SobreComponent {
  tSer = inject(TranslationService);
}

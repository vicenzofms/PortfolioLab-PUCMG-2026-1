import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoGithub } from '@ng-icons/ionicons';

@Component({
  selector: 'app-projeto-card',
  styleUrl: './projeto-card.scss',
  templateUrl: './projeto-card.html',
  imports: [NgIcon],
  providers: [provideIcons({ ionLogoGithub })],
})
export class ProjetoCardComponent {
  @Input() suptitle: string = '';
  @Input() githubLink: string = '';
  @Input({ required: true }) title: string = '';
}

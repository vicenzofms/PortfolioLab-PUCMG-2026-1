import { NgIcon, provideIcons } from '@ng-icons/core';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  heroHomeSolid,
  heroLanguageSolid,
  heroUserSolid,
  heroFolderSolid,
  heroBriefcaseSolid,
  heroChatBubbleLeftRightSolid,
  heroBars3Solid,
  heroSunSolid,
  heroMoonSolid,
} from '@ng-icons/heroicons/solid';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroHomeSolid,
      heroUserSolid,
      heroFolderSolid,
      heroLanguageSolid,
      heroBriefcaseSolid,
      heroChatBubbleLeftRightSolid,
      heroBars3Solid,
      heroMoonSolid,
      heroSunSolid,
    }),
  ],
})
export class HeaderComponent {
  tSer = inject(TranslationService);

  @Input({ required: true }) theme!: 'dark' | 'light';
  @Output('changeTheme') changeTheme = new EventEmitter();

  ngOnInit() {
    console.log('Ola!');
  }

  toggleTheme() {
    this.changeTheme.emit();
  }

  changeLanguage() {
    if (this.tSer.currentLanguage === 'br') {
      this.tSer.loadTranslation('en');
      return;
    }
    this.tSer.loadTranslation('br');
  }
}

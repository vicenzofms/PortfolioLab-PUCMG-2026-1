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
  heroXMarkSolid,
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
      heroXMarkSolid,
      heroMoonSolid,
      heroSunSolid,
    }),
  ],
})
export class HeaderComponent {
  tSer = inject(TranslationService);
  menuOpen = false;

  @Input({ required: true }) theme!: 'dark' | 'light';
  @Output('changeTheme') changeTheme = new EventEmitter();

  toggleTheme() {
    this.changeTheme.emit();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  changeLanguage() {
    if (this.tSer.currentLanguage === 'br') {
      this.tSer.loadTranslation('en');
      return;
    }
    this.tSer.loadTranslation('br');
  }
}

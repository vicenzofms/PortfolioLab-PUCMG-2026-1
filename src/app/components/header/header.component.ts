import { NgIcon, provideIcons } from '@ng-icons/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  heroHomeSolid,
  heroUserSolid,
  heroFolderSolid,
  heroChatBubbleLeftRightSolid,
  heroBars3Solid,
  heroSunSolid,
  heroMoonSolid,
} from '@ng-icons/heroicons/solid';

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
      heroChatBubbleLeftRightSolid,
      heroBars3Solid,
      heroMoonSolid,
      heroSunSolid,
    }),
  ],
})
export class HeaderComponent {
  @Input({ required: true }) theme!: 'dark' | 'light';
  @Output('changeTheme') changeTheme = new EventEmitter();

  ngOnInit() {
    console.log('Ola!');
  }

  toggleTheme() {
    this.changeTheme.emit();
  }
}

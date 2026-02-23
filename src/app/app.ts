import { Component, DOCUMENT, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ParticlesConfig } from './particles-config';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SobreComponent, ProjetosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('PortfolioLaboratorio');

  theme: 'light' | 'dark' = 'dark';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  toggleTheme() {
    const htmlEl = this.document.documentElement;
    if (this.theme === 'dark') {
      this.renderer.removeClass(htmlEl, 'dark');
      this.theme = 'light';
    } else {
      this.renderer.addClass(htmlEl, 'dark');
      this.theme = 'dark';
    }
  }
}

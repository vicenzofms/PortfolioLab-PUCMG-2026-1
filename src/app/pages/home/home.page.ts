import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../../components/sobre/sobre.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.components';
import { ContatoComponent } from '../../components/contato/contato.component';
import { invokeParticles } from '../../app';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  styleUrl: './home.scss',
  templateUrl: './home.html',
  standalone: true,
  imports: [CommonModule, SobreComponent, ProjetosComponent, ExperienciaComponent, ContatoComponent],
})
export class HomePage {
  ngOnInit(): void {
    invokeParticles();
  }
}

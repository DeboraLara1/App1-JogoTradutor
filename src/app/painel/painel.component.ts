import { Component, OnInit } from '@angular/core';
import { FRASES } from './frases-mock'
import { Frases } from '../shered/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frases[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frases

  public progreso: number = 0


  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log (this.rodadaFrase);
   }

  ngOnInit(): void {
  }
  //Retorna o valor digitado no html, com auxilio do <HTMLInputElement> é possivel
  // chamar o value que se encontra dentro do script, sem ele não conseguimos pois declara erro((<HTMLInputElement>resposta.target).value)
  // se faz necessario isolar a resposta.target para poder pegar o value
  public atualizaResposta(resposta: Event):void{
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    //console.log(this.resposta)
  }

  public verificandoResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução esta correta')
      console.log('verificar resposta:', this.resposta)
      //trocar pergunta da rodada
      this.rodada++

      //Progresso da barra
      this.progreso= this.progreso + (100/this.frases.length)
      console.log(this.progreso)

      //Atualiza o obejeto rodada frase
      this.rodadaFrase = this.frases[this.rodada]

    } else {
      alert('A tradução esta incorreta')
    }
  }
}

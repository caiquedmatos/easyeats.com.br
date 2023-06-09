import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-aperitivo-four',
  templateUrl: './aperitivo-four.component.html',
  styleUrls: ['./aperitivo-four.component.css']
})
export class AperitivoFourComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.titulo = 'Bolim de Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Bolinho e queijo (Unidade)'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/aperitivos/4.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '4,20'; // Inicialização da propriedade 'preco' no construtor
  }


   nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

 titulo: string; // Declaração da propriedade 'titulo' sem inicialização
  descricao: string; // Declaração da propriedade 'descrição' sem inicialização
  img: string; // Declaração da propriedade 'img' sem inicialização
  preco: string; // Declaração da propriedade 'preço' sem inicialização

  adicionaComida() {
    console.log("Função Acionada");

    let item = "Bolim de Eats";
    let preco = "R$ 4,20";

    $.post(
      'https://easyeats-node.onrender.com/adicionaItem',
      {
        "item": item,
        "preco": preco,
        "nome": this.nome,
        "email": this.email
      },
      (res) => {
        console.log('Enviei o Json do Item');
        console.log(res);
        if (res === 'Item Atualizado') {
          this.router.navigate(['/carrinho']);
        } else {
          alert('Erro no Banco, Refaça o Login.');
        }
      }
    );
  }
}

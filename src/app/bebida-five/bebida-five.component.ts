import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'app-bebida-five',
  templateUrl: './bebida-five.component.html',
  styleUrls: ['./bebida-five.component.css']
})
export class BebidaFiveComponent {
  constructor(private  http: HttpClient, private router: Router) {
    this.titulo = 'Suco Eats'; // Inicialização da propriedade 'titulo' no construtor
    this.descricao = 'Limão, morango, uva, jaca, melancia ou caju'; // Inicialização da propriedade 'descricao' no construtor
    this.img = '../../assets/imagens/bebidas/5.png'; // Inicialização da propriedade 'img' no construtor
    this.preco = '40,91'; // Inicialização da propriedade 'preco' no construtor
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

    let item = "Suco Eats";
    let preco = "R$ 40,91";

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

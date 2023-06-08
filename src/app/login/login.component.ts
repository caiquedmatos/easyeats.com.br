import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';
  id: string = '';

  loginUser(email: string, senha: string) {
    console.log('Passei no primeiro ponto do login');
    $.get(
      'http://localhost:3000/login',
      {
        "email": email,
        "senha": senha,
      },
      (res) => {
        console.log(res);
        console.log('Passei no segundo ponto do login');
        this.Dados(email);
        if (res[0].senha === senha) {
        this.router.navigate(['/favoritos']);
        } else if (res === 'Usuário não encontrado.') {
          alert('Usuário não encontrado.');
        } else {
          alert('Senha incorreta.');  
        }
      }
    );
  }
  Dados(email: string) {
    console.log('Fui acionado');

    $.post(
      'http://localhost:3000/dados_usuario',
      {
        email: email,
      },
      (res) => {
        console.log('Trouxe dados!');
        console.log(res);

        this.id = res[0].ID;
        this.nome = res[0].nome; // Verifique a estrutura do objeto JSON retornado e ajuste os índices ou propriedades adequadamente
        this.senha = res[0].senha;
        this.email = res[0].email;
        this.telefone = res[0].telefone;
        console.log('Trouxe dados!');
        console.log(res);

        localStorage.setItem('id', this.id); //salvando o id no localStorage
        localStorage.setItem('nome', this.nome);
        localStorage.setItem('senha', this.senha);
        localStorage.setItem('email', this.email);
        localStorage.setItem('telefone', this.telefone);
      }
    );
  }
}

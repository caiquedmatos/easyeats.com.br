import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  showPreloader: boolean = true;
  rota = localStorage.getItem('rota');

  constructor() {}

  ngOnInit() {
    localStorage.setItem('rota', "https://easyeats-node.onrender.com/");
    this.rota=localStorage.getItem('rota');
    console.log(this.rota);
    setTimeout(() => {
      this.showPreloader = false;
    }, 6000);
  }
  
}

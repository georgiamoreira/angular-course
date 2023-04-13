import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  //Pode ser assim:
  @Input() name: string = '';
  //Ou assim, usando a técnica de inicialização do type script: @Input() name!: string;

  //Coloca a exclamação antes dos dois pontos para não precisar inicializar e indicar que será inicializado depois (!:);
  //É uma estratégia do tipe script que ele inicializa os dados ou garante que o dado será inicializado;
  @Input() userData!: {email: string; role: string};

  constructor() {}

  ngOnInit(): void {
  }

}

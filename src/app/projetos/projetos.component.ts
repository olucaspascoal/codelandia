import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  public listaProjetos: [] | any;
  constructor() { }

  ngOnInit(): void {
    this.listaProjetos = [
      {
        nome: "La Pizza",
        descricao: "Desenvolvimento de página de pizza",
        img: "https://olucaspascoal.com/assets/box-pizza.png",
        demo: "https://lp-lapizza.netlify.app/",
        github: "https://github.com/olucaspascoal/laPizza"
      },
      {
          nome: "Feliz Natal e Ano Novo ",
          descricao: "Página para comemorações de final de ano",
          img: "https://olucaspascoal.com/assets/box-natal.png",
          demo: "https://lp-natalanonovo.netlify.app/",
          github: "https://github.com/olucaspascoal/natal"
      },
      {
          nome: "Site Rachi",
          descricao: "Desenvolvimento de site rachi sobre serviços tecnológicos",
          img: "https://olucaspascoal.com/assets/box-rachi.png",
          demo: "http://rachi.olucaspascoal.com/",
          github: "https://github.com/olucaspascoal/rachi"
      },
      {
          nome: "Xbox",
          descricao: "Criação de página para o lançamento do novo Xbox series X",
          img: "https://user-images.githubusercontent.com/66574231/155058932-eb96156c-4807-4d75-823f-ac65344db58c.png",
          demo: "https://lp-xbox.netlify.app/",
          github: "https://github.com/olucaspascoal/xbox"
      }
    ]
  }
}

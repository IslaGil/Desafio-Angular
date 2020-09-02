import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-logica-ang',
  templateUrl: './logica-ang.component.html',
  styleUrls: ['./logica-ang.component.css']
})
export class LogicaAngComponent implements OnInit {
      
     cep1:"99.999-999";
     cep:  "";
     uf:  "" ;
     cidade: "";
     logadouro:"";    

     cepadicionado = [];

     ceppesquisado = [];
    
  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  adicionar(cep1){
     /* console.log(cep1);
    let cep2 = cep1.replace(/\D/g, '');
    if (cep2 != "") {
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep2)) {
        let script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/'+ cep1 + '/json';
        document.body.appendChild(script);
       }else {
        this.limpar();
        alert("Formato de CEP inválido.");
     }*/
     
     /*  this.cepadicionado.push({
      cep1: this.cep1 
    });
     this.limpar();{
      console.log(this.cepadicionado)
         } */     
    }   
  }      
   
  pesquisar(){
    this.ceppesquisado.push(
      {
        cep: this.cep,
        uf:this.uf,
        cidade:this.cidade,
        logadouro:this.logadouro,
      }
    );
    this.limpar();
    console.log(this.ceppesquisado);      
  }

  //excluir(i:number){
   //console.log("delete: " + i) }  
    
  

  limpar(){
    this.cep1="99.999-999";
    this.cep ="";
    this.uf="";
    this.cidade="";
    this.logadouro="";
  }
}

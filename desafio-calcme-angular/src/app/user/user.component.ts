import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  name: any;
  email: any;
  phone: any;

  constructor(private http: HttpClient) { }

  enviar() {
    if(this.name === undefined || this.email === undefined || this.phone === undefined){
      alert('Por favor, preencha todos os campos para enviar!')
    }else{
      let resp = this.http.post<any>("http://localhost:8080/user", {name: this.name, email:this.email, phone: this.phone});
      resp.subscribe(() => alert('Salvo no banco de dados!'));
    }
  }

}



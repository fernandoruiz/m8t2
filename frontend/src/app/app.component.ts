import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'm8t2-project';

  BASE_URL = 'http://10.40.15.32:3000/';

  secret;
  verifyTokenForm: FormGroup;
  responseVerify;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.verifyTokenForm = new FormGroup({
      token: new FormControl()
    });

    this.http.get(this.BASE_URL, {responseType: 'text'}).subscribe( x => this.secret = x);
  }

  verifyToken() {
    const headers = new HttpHeaders().set('token', this.verifyTokenForm.controls.token.value);

    this.http.post(this.BASE_URL + 'verify', {}, {headers})
      .subscribe(
        response => {
          if (response) {
            this.responseVerify = 'El token es válido';
          }
          else {
            this.responseVerify = 'El token no es correcto';
          }
        },
        error => {
          alert('Se ha producido un error al intentar verificar el token');
        });
  }
}

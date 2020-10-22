import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
    public Ip;
    constructor(private http : HttpClient) { }
    
    AdicionaIP(ip: any){
        this.Ip=ip;
    }

    Post(usuario : any, Direcao: any){
      let url = 'http://'+ this.Ip +'/' + Direcao;
      let headers = new HttpHeaders({'content-type':'text/plain'});
      return this.http.post(url, usuario, {headers : headers,  responseType: 'text'}).toPromise();
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(usuario){
    return this.http.post(AppConstant.baseLogin, JSON.stringify(usuario)).subscribe(data =>{
      /*Retorno Http */

      console.info(JSON.parse (JSON.stringify(data)));
    })
  }

}

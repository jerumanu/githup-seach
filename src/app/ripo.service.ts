import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RipoService {

  constructor(private http :HttpClient) { }
  getripo(manu:string){
  const endpoint =(`https://api.github.com/search/repositories?access_token=e82f6cc9a092ed542b499039481e5c663be5461c&q=${manu}` );
  return this.http.get<any>(endpoint)
  }
  getsearch(){
    const endpoint =(`https://api.github.com/search/users?access_token==` );
    return this.http.get<any>(endpoint)
    }
  }

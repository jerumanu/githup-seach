import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RipoService {

  constructor(private http :HttpClient) { }
  getripo(){
  const endpoint =(``)
  return this.http.get(endpoint)
  }
}

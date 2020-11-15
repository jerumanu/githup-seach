import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { RipoService } from "../ripo.service";
@Component({
  selector: 'app-ripo',
  templateUrl: './ripo.component.html',
  styleUrls: ['./ripo.component.css']
})
export class RipoComponent implements OnInit {
repos :any[]=[]

  constructor(private riposervice:RipoService) { }
  getUser(manu:string){
  this.riposervice.getripo(manu)
  .subscribe((response:any )=>{
    this.repos=response.items
  }); 
  }
  ngOnInit(): void {
    this.getUser("praise")
  }

}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { RipoService } from "../ripo.service";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // searchs:any[]=[]
  // constructor(private riposervice:RipoService) { }
  searchTerm: string = "";
  @Output() passSearchTerm = new EventEmitter<string>();
  submitSearch(){
    this.passSearchTerm.emit(this.searchTerm);
    this.searchTerm = "";
  }
  ngOnInit(): void {
  
   
  }

}

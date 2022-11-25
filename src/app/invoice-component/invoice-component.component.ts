import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {


  list = [
    {idFacture:1,montantFacture:120, montantRemise:10, dateFacture:"12/12/2021",active:true},
    {idFacture:2,montantFacture:1020, montantRemise:90, dateFacture:"22/11/2020",active:true},
    {idFacture:3,montantFacture:260, montantRemise:30, dateFacture:"18/10/2020",active:false},
    {idFacture:4,montantFacture:450, montantRemise:40, dateFacture:"14/12/2020",active:true},
    ];

  constructor( private route : ActivatedRoute) { console.log(this.activate);


   }

  id : any ; 
  activate : any ; 

  ngOnInit(): any {
this.id = this.route.snapshot.paramMap.get('id');
this.activate = this.route.snapshot.paramMap.get('activate');
  }


}

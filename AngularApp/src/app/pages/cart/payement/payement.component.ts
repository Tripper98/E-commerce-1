import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {payement} from '../../../model/payement';
import { NgForm } from '@angular/forms';
import {PayementService} from '../../../services/payement.service';
@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
prixTotal:number;
order:payement ={
  email : null,
  first_name : null,
  last_name : null,
  phone : null,
  prixTotal: +this.route.snapshot.params['id'],
  paypal:null,
  cheque:null

};
  constructor(
    private route: ActivatedRoute,
    private ps:PayementService
    ) { }

    onSubmit(myform:NgForm){
      console.log(myform.value);
      this.ps.addPayement(this.order).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error),
      ); 
      
    }
  ngOnInit() {

    this.prixTotal = +this.route.snapshot.params['id'];
  

  }

}

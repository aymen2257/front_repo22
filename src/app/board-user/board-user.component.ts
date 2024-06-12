import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ContratService } from '../_services/contrat.service';
import { Router } from '@angular/router';
import { ReclamtionService } from '../_services/reclamtion.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  
  user: any;
  numContrats: any;
  numPayments: any;
  numReclamations: any;
  contrats: any;
  expiredContrats: any;
  id: any;
  today: Date = new Date();
  reclamations: any[] = [];
  userId!: number;
  payments: any[] = [];
  totalRecords!: number;
  loading!: boolean;

  constructor(private token: TokenStorageService, private contratService: ContratService,private reclamationService: ReclamtionService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.token.getUser();
    this.id = this.user.id;
    this.getContrats(this.user.id);
    this.loadPayments(this.user.id);
    this.getReclamations();
  }

  getContrats(id: any) {
    this.contratService.getUserContrats(id).subscribe(
      data => {
        this.contrats = data;
        this.numContrats = this.contrats.length;
      },
      err => {
        console.error("Error loading contracts:", err);
      }
    );
  }

  /*getPayments(id: any) {
    this.contratService.getPaymentsByUserId(id).subscribe(
      data => {
        this.payments = data;
        console.log("paymet data", data);
          if(this.payments.status == "COMPLÉTÉ")
        this.numPayments = this.payments.length;

      },
      err => {
        console.error("Error loading contracts:", err);
      }
    );
  }*/
  loadPayments(userId: number): void {
    this.loading = true;
    this.contratService.getPaymentsByUserId(userId).subscribe(
      (data) => {
        this.payments = data.map((payment: { status: string; }) => {
          if (payment.status === 'CRÉE') {
            payment.status = 'ANNULÉ';
          }
          return payment;
        });
        this.totalRecords = data.length;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching payments', error);
        this.loading = false;
      }
    );
  }




  getReclamations(){
    this.reclamationService.getUserReclamations().subscribe(
      (data) => {
        this.reclamations = data;
        if(this.reclamations!=null ){
        this.numReclamations = this.reclamations.length ;}
        else{this.numReclamations=0;}
      },
      (error) => {
        console.error('Error fetching user reclamations', error);
      }
    );
  }


 

}
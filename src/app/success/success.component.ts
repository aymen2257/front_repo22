import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratService } from '../_services/contrat.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  sessionId: string | null = null;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private contratService: ContratService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sessionId = params['session_id'];
      if (this.sessionId) {
        this.checkPaymentStatus();
      }
    });
  }

  checkPaymentStatus(): void {
    this.route.url.subscribe(url => {
      const isCancel = url.some(segment => segment.path === 'cancel');
      this.updatePaymentStatus(this.sessionId!, !isCancel);
    });
  }

  updatePaymentStatus(sessionId: string, success: boolean): void {
    this.contratService.updatePaymentStatus(sessionId, success).subscribe(
      response => {
        this.message = success ? 'Payment avec succés !' : 'Payment est annulé.';
      },
      error => {
        console.error('Error updating payment status:', error);
        this.message = 'Il y a un erreur .Contactez le support.';
      }
    );
  }
}

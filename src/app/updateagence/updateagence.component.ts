import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router from '@angular/router' instead of 'express'
import { AgenceService } from '../_services/agence.service';

@Component({
  selector: 'app-updateagence',
  templateUrl: './updateagence.component.html',
  styleUrl: './updateagence.component.css'
})
export class UpdateagenceComponent {
  agence: any = {
    name: '',
    address: '',
    governorate: '',
    codepostale: '',
    cite: '',
    latitude: null,
    longitude: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agenceService: AgenceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.agenceService.getAgenceById(id).subscribe(data => {
        this.agence = data;
      });
    });
  }

  updateAgence(): void {
    this.agenceService.updateAgence(this.agence).subscribe(() => {
      this.router.navigate(['/adminagence']);
    });
  }
}

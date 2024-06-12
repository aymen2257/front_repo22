import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the correct module for Router
import { AgenceService } from '../_services/agence.service';

@Component({
  selector: 'app-createagence',
  templateUrl: './createagence.component.html',
  styleUrl: './createagence.component.css'
})
export class CreateagenceComponent {
  agence = {
    name: '',
    address: '',
    governorate: '',
    codepostale: '',
    cite: '',
    latitude: null,
    longitude: null
  };

  constructor(private agenceService: AgenceService, private router: Router) {}

  createAgence(): void {
    this.agenceService.createAgence(this.agence).subscribe(() => {
      this.router.navigate(['/adminagence']);
    });
  }
}

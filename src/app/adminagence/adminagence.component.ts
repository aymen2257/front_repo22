import { Component, AfterViewInit } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgenceService } from '../_services/agence.service';

@Component({
  selector: 'app-adminagence',
  templateUrl: './adminagence.component.html',
  styleUrls: ['./adminagence.component.css']
})
export class AdminagenceComponent implements AfterViewInit {
  public agencies: any[] = [];
  public selectedAgence: any | null = null;
  private map: any;
  private L: any; // Store Leaflet globally within the component
  private dataLoaded = false;

  constructor(
    private http: HttpClient,
    private agenceService: AgenceService
  ) { }

  ngOnInit(): void {
    this.agenceService.findallagaences().subscribe(agencies => {
      this.agencies = agencies;
      this.dataLoaded = true;
    });

    import('leaflet').then(L => {
      this.L = L;
      this.initMap();
    });
  }

  private initMap(): void {
    this.map = this.L.map('map').setView([36.8008, 10.1807], 8);
    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    this.updateMap(); // Call updateMap here
  }

  ngAfterViewInit(): void {
    // Initialization that requires DOM elements should ideally go here
  }

  

  

  deleteAgence(agence: any): void {
    this.agenceService.deleteAgence(agence.id).subscribe(() => {
      const index = this.agencies.findIndex(a => a.id === agence.id);
      if (index !== -1) {
        this.agencies.splice(index, 1);
        this.updateMap();
      }
    });
  }

  private updateMap(): void {
    if (!this.dataLoaded || !this.map) {
      return;
    }

    // Clear existing markers
    this.map.eachLayer((layer: any) => {
      if (layer instanceof this.L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    // Rest of your code...
    this.agencies.forEach(agence => {
      this.geocodeAddress(agence.address).subscribe(coords => {
        if (coords) {
          const marker = this.L.marker([coords.lat, coords.lon])
            .bindPopup(`<b>${agence.name}</b><br>${agence.address}`);
          marker.addTo(this.map);
        }
      });
    });
  }

  private geocodeAddress(address: string): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1`;
    const headers = new HttpHeaders({
      'User-Agent': 'MyWebApplication/<App-Version>'
    });

    return this.http.get<any[]>(url, { headers }).pipe(
      map((response: any[]) => {
        if (response.length > 0 && response[0].lat && response[0].lon) {
          return { lat: response[0].lat, lon: response[0].lon };
        } else {
          console.error(`Geocoding failed or returned no results for address "${address}".`);
          return undefined;
        }
      }),
      catchError(error => {
        console.error(`Geocoding error for address "${address}":`, error);
        return of(undefined);
      })
    );
  }
}
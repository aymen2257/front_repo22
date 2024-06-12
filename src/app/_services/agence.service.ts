import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private baseUrl = AppConstants.API_URL.replace(/\/+$/, '');  // Remove any trailing slashes from the base URL

  constructor(private http: HttpClient) { }

  getAgencesByCite(cite: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agencies/byCite?cite=${encodeURIComponent(cite)}`, httpOptions);
  }

  getGovernorates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/agencies/governorates`, httpOptions);
  }

  getAgencesByGovernorate(governorate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agencies/byGovernorate?governorate=${encodeURIComponent(governorate)}`, httpOptions);
  }

  getNearestAgence(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/agencies/nearest?lat=${lat}&lon=${lon}`, httpOptions);
  }

  deleteAgence(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/agencies/deleteAgence/${id}`, httpOptions);
  }

  updateAgence(agence: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/agencies/editagence`, agence, httpOptions);
  }

  createAgence(agence: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agencies/addagence`, agence, httpOptions);
  }
  findallagaences(): Observable<any> {
    return this.http.get(`${this.baseUrl}/agencies/findall`, httpOptions);
  }
  getAgenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/agencies/${id}`, httpOptions);
  }
  
}

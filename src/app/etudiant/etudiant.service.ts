import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Etudiant[]>('http://localhost:9099/etudiants/all');}
}

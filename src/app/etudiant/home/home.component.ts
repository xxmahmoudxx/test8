import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  alletudiant:Etudiant[]=[];
  constructor(private etudiantservice:EtudiantService){}
  ngOnInit(): void {
    this.get()
  }
  
  get() {
    this.etudiantservice.get().subscribe((data) => {
      this.alletudiant = data;
    });
  }


}
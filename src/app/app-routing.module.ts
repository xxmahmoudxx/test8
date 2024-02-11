import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './etudiant/home/home.component';
const routes: Routes = [
  {path: '',
  redirectTo: 'etudiant/home',
  pathMatch: 'full',
},
{
  path: 'etudiant/home',
  component: HomeComponent, // Load HomeComponent for this path
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipComponent } from './components/starship/starship.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'starship/all',
    component: StarshipComponent
  },
  {
    path: 'starship',
    component: StarshipDetailComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeailsComponent } from './pages/deails/deails.component';
import { SellComponent } from './pages/sell/sell.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DeailsComponent},
  {path: 'sell', component: SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, HomeComponent, DeailsComponent, SellComponent]

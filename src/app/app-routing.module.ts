import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { RentalComponent } from './rental/rental.component';
import { TravelroutesComponent } from './travelroutes/travelroutes.component';

const routes: Routes = [
  {
    path: '',  
    children: [    
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'rental', component: RentalComponent},
      { path: 'travelroutes', component: TravelroutesComponent},
      { path: 'accessories', component: AccessoriesComponent},
      { path: 'contact', component: ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

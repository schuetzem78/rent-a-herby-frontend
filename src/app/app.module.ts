import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RentalComponent } from './rental/rental.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { TravelroutesComponent } from './travelroutes/travelroutes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QandaComponent } from './qanda/qanda.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        RentalComponent,
        AccessoriesComponent,
        TravelroutesComponent,
        QandaComponent
    ],
    bootstrap: [AppComponent], imports: [FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatChipsModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        CarouselModule,
        ContactComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

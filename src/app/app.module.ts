import { CarouselSeriesComponent } from './components/carouselSeries/carouselSeries.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarshipComponent } from './components/starship-list/starship.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StarshipDetailComponent,
    StarshipComponent,
    NavigationBarComponent,
    LoginFormComponent,
    SignUpFormComponent,
    CarouselComponent,
    CarouselSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

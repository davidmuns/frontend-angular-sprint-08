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
import { StarshipComponent } from './components/starship/starship.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StarshipDetailComponent,
    StarshipComponent,
    NavigationBarComponent,
    LoginModalComponent,
    LoginFormComponent,
    SignUpFormComponent,
    SignUpModalComponent
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

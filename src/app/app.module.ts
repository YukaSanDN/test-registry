import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// MY-COMPONENT
import { RegistryComponent } from './components/registry/registry.component';
import { AuthModalComponent } from './modals/auth.modal/auth.modal.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UserCardComponent } from './components/user-card/user-card.component';
// ANGULAR MATERIAL

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
// SERVISE

import {RegistryService} from './service/registryService/registry-service.service';
import {AuthService} from './service/authService/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    AuthorizationComponent,
    AuthModalComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    AuthModalComponent,
  ],
  providers: [
    RegistryService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

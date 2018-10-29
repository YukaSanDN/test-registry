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
// ANGULAR MATERIAL

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

// SERVISE

import {RegistryServiceService} from './service/registryService/registry-service.service';

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
    HttpClientModule
  ],
  entryComponents: [
    AuthModalComponent,

  ],
  providers: [
    RegistryServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

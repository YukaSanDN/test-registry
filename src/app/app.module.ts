import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// MY-COMPONENT
import { RegistryComponent } from './components/registry/registry.component';
import { AuthModalComponent } from './modals/auth.modal/auth.modal.component';
// ANGULAR MATERIAL

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    AuthorizationComponent,
    AuthModalComponent
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
    MatDialogModule
  ],
  entryComponents: [
    AuthModalComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

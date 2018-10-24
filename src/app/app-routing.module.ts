import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegistryComponent} from './components/registry/registry.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
const routes: Routes = [

  {
    path: 'registy',
    component: RegistryComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: '**',
    component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

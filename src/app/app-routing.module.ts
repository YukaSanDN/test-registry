import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegistryComponent} from './components/registry/registry.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {UserCardComponent} from './components/user-card/user-card.component';
const routes: Routes = [

  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'user',
    component: UserCardComponent
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

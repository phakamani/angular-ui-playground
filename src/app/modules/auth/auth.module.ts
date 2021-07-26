import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { SharedModule } from './../../shared/shared/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, SharedModule, CommonModule]
})
export class AuthModule {}

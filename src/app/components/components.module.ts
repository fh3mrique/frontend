import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "../angular-material.module";
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UsersCreateComponent } from './user/users-create/users-create.component';
import { UsersListComponent } from "./user/users-list/users-list.component";
import { UserUpdateComponent } from './user/user-update/user-update.component';
@NgModule(
    {
        declarations: [
            NavComponent,
            HomeComponent,
            HeaderComponent,
            LoginComponent,
            UsersCreateComponent,
            UsersListComponent,
            UserUpdateComponent,
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            AngularMaterialModule,
            AppRoutingModule,
            /* aula 37 11.22min */
            /* ToastrModule  */
        ],
        exports: [
            AngularMaterialModule,
            AppRoutingModule
        ],
    }
)
export class ComponentsModule { }
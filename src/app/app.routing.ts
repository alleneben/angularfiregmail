import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';




export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'login',component:LoginComponent},
    { path:'sales', component:SalesComponent}
];


export const routComponents = [LoginComponent,SalesComponent];
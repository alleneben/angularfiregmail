import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './authpage/authpage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.service';




export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'login',component:LoginComponent},
    { path:'authpage', component:AuthPageComponent, canActivate:[AuthGuard]}
];


export const routComponents = [LoginComponent,AuthPageComponent];
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];

export const LogonRouting = RouterModule.forRoot(loginRoutes, { useHash: true });

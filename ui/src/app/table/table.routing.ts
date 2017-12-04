import { Routes, RouterModule } from '@angular/router';
import { SidenavTicketComponent } from './components/sidenav-ticket/sidenav-ticket.component';
import { AuthGuardService as AuthGuard } from '../services/auth/auth-guard.service';

const tableRoutes: Routes = [
    { path: 'home', component: SidenavTicketComponent, canActivate: [AuthGuard] }
];

export const TableRouting = RouterModule.forRoot(tableRoutes, { useHash: true });

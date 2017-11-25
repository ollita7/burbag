import { Routes, RouterModule } from '@angular/router';
import { SidenavTicketComponent } from './components/sidenav-ticket/sidenav-ticket.component';


const tableRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SidenavTicketComponent }
];

export const TableRouting = RouterModule.forRoot(tableRoutes, { useHash: true });

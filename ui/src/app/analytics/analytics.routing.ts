import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';


const analyticsRoutes: Routes = [
    { path: 'chart', component: ChartComponent }
];

export const AnalyticsRouting = RouterModule.forRoot(analyticsRoutes, { useHash: true });

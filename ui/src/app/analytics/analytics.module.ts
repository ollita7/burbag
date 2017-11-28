import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import { ChartComponent } from './components/chart/chart.component';

import { AnalyticsRouting } from './analytics.routing';
import { BeersService } from '../services/beers.service';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
    RouterModule,
    AnalyticsRouting
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ],
  providers: [BeersService]
})
export class AnalyticsModule { }

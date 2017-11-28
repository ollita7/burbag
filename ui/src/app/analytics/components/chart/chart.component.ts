import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;
import { BeersService } from '../../../services/beers.service';
import { BeerItem } from '../../../models/Persons';

@Component({
  selector: 'app-chart',
  template: `
  <div *ngIf="dataChart.length !== 0">
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
`,
  styleUrls: [
    '../../../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  public beers: BeerItem[] = [];
  public dataChart: any = [];
  constructor(private beersService: BeersService) {

  }


  options;
  data;
  ngOnInit() {
    this.beersService.getBeers().subscribe((items: BeerItem[]) => {
      this.dataChart = items.map((item: BeerItem) => {
        return {
          label: item.name,
          price: item.price
        };

      });
      this.options = {
        chart: {
          type: 'discreteBarChart',
          height: 450,
          margin: {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function (d) { return d.label; },
          y: function (d) { return d.price; },
          showValues: true,
          valueFormat: function (d) {
            return d3.format(',.4f')(d);
          },
          duration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: -10
          }
        }
      };

      this.data = [
        {
          key: 'Cumulative Return',
          values: this.dataChart
        }
      ];
    });


  }

}

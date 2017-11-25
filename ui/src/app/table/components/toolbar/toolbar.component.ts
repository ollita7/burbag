import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'bill-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/bill.svg'));
  }

  ngOnInit() {
  }

}

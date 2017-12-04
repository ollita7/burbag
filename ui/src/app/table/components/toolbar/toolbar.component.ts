import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() public sideBarChange = new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'bill-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/bill.svg'));
  }

  public onToggleSideBar(): void {
    this.sideBarChange.emit();
  }

  ngOnInit() {
    const a = '';
  }

}

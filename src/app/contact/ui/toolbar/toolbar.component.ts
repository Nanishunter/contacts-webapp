import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() onMenuClick: EventEmitter<any>;

  constructor() {
    this.onMenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  menuClick() {
    this.onMenuClick.emit();
  }

}

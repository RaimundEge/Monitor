import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
  trans: any;

  constructor() {  }

  getKeys() {
    // console.log('getKeys: ', Object.keys(this.trans))
    return Object.keys(this.trans);
  }
}

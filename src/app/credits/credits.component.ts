import { Component, OnInit } from '@angular/core';
import { TransService } from '../trans.service';

@Component({
  selector: 'my-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  providers: [TransService]
})
export class CreditsComponent implements OnInit {
  selected: any;
  items: any[];

  constructor(private service: TransService) { }

  getCredits(): void {
    // console.log("reloading list of  items")
    this.service.getTrans("CreditCard/").subscribe(
      (data: any[]) => {
        for (var o of data) {
          this.service.prepare(o);
        }
        this.items = data;
        // console.log(this.items[0]);
        this.selected = this.items[0];
      }
    );
  }

  ngOnInit(): void {
    this.getCredits();
  }

  onSelect(item: any): void {
    this.selected = item;
  }
}

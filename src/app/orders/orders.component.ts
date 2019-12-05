import { Component, OnInit } from '@angular/core';
import { TransService } from '../trans.service';

@Component({
  selector: 'my-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [TransService]
})
export class OrdersComponent implements OnInit {
  selected: any;
  items: any[];
  
  constructor(private service: TransService) { }
  
  getOrders(): void {
    this.service.getTrans("PurchaseOrder/").subscribe(
      (data: any[]) => {
        for (var o of data) {
          this.service.prepare(o);
        }
        this.items = data;
        this.selected = this.items[0];
      }
    );
  }  

  ngOnInit(): void {
    this.getOrders();
  }  
  
  onSelect(item: any): void {
    this.selected = item;
  }
}
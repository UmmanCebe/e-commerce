import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }

  title: string = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    {
      id: 1,
      name: "Phone",
      price: 1000,
      categoryId: 1,
      description: "Iphone 14 proMax",
      imgUrl: "https://images.unsplash.com/photo-1600262606148-dbe6a3f5dc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 2,
      name: "Laptop",
      price: 2500,
      categoryId: 2,
      description: "MacBook",
      imgUrl: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]

  ngOnInit() {

  }

  addToCart(product:any) {
    this.alertifyService.success(product.name + " " + "sepete eklendi")
  }
}
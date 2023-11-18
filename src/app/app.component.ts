import { Component , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';
  nombre:string = "Relari";
  products: Product[] = [];

  http = inject(HttpClient);

  changeTitle() {
    this.title = 'Titulo cambiado.';
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data;
      });
  }
}

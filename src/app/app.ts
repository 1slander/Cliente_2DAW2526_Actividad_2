import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService, IProduct } from './services/product.service';
import { ProductsListComponents } from './components/products-list-components/products-list-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponents],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gestion-producto');

  constructor(private productService: ProductService) {
    this.productService.cargarProductos().subscribe((datos: IProduct[]) => {
      console.log('Products cargados desde la API: ', datos);
    });
  }
}

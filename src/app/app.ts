import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService, IProduct } from './services/product.service';
import { ProductsListComponents } from './components/products-list-components/products-list-components';
import { ProductFormComponent } from './components/product-form-component/product-form-component';
import { ProductFilterComponent } from './components/product-filter/product-filter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponents, ProductFormComponent, ProductFilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gestion-producto');

  constructor(private productService: ProductService) {
    this.productService.cargarProductos();
  }

  onProductoCreado(product: any) {
    this.productService.agregarProducto(product);
  }
}

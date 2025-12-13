import { Component } from '@angular/core';
import { IProduct, ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card-component/product-card-component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list-components',
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './products-list-components.html',
  styleUrl: './products-list-components.css',
})
export class ProductsListComponents {
  products$!: Observable<IProduct[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cargarProductos();

    this.products$ = this.productService.products$;
    // this.products$ = this.productService.cargarProductos().subscribe((datos) => {
    //   this.products$ = datos;
    //   console.log('Productos recibidos: ', datos);
    // });
  }

  onEliminar(id: string) {
    console.log('Producto a eliminar:', id);
  }
}

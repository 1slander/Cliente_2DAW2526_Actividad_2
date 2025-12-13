import { Component, Input } from '@angular/core';
import { IProduct, ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card-component',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  constructor(private productService: ProductService) {}

  onEliminar() {
    this.productService.eliminarProducto(this.product._id);
  }
}

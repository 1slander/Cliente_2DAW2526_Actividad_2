import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form-component.html',
  styleUrl: './product-form-component.css',
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<any>();

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl(true),
  });

  enviar() {
    this.productCreated.emit(this.form.value);
    this.form.reset({
      name: '',
      description: '',
      price: 0,
      category: '',
      image: '',
      active: true,
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://api.npoint.io/1dee63ad8437c82b24fe';

  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  private productsOriginales: IProduct[] = [];

  constructor(private http: HttpClient) {}

  cargarProductos(): void {
    // return this.http.get<IProduct[]>(this.url);
    this.http.get<IProduct[]>(this.url).subscribe({
      next: (products) => {
        this.productsOriginales = products;
        this.productsSubject.next(products);
      },
      error: (err) => console.error('Error al cargar productos:', err),
    });
  }

  agregarProducto(datos: any) {
    const nuevoProducto: IProduct = {
      _id: crypto.randomUUID(), // Generamos un ID único (trampilla)
      name: datos.name,
      description: datos.description,
      price: datos.price,
      category: datos.category,
      image: datos.image,
      active: datos.active,
    };

    // Añadimos el nuevo producto al principio de la lista
    this.productsOriginales = [nuevoProducto, ...this.productsOriginales];

    // Emitimos la nueva lista para que Angular actualice la vista
    this.productsSubject.next(this.productsOriginales);
  }

  eliminarProducto(id: string) {
    this.productsOriginales = this.productsOriginales.filter((p) => p._id !== id);
    this.productsSubject.next(this.productsOriginales);
  }
}

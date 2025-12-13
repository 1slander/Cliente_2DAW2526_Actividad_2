import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  cargarProductos(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}

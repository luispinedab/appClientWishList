import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }
}

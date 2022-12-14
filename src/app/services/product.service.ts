import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44388/api/Products/getall';
  
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {

    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3000/products";

  getProduct(categoryId: any): Observable<Product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }

    return this.httpClient.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.httpClient.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMesage = ""
    if (err.error instanceof ErrorEvent) {
      errorMesage = "bir hata oluştu" + err.error.message
    }
    else {
      errorMesage = "Sistemsel hata"
    }
    return throwError(errorMesage);
  }
}
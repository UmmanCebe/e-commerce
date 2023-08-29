import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(categoryId: any): Observable<Product[]> {

    let newPath = "http://localhost:3000/products";

    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }

    return this.httpClient.get<Product[]>(newPath).pipe(
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

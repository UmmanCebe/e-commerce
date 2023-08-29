import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categories").pipe(
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: any;
  constructor(private http: HttpClient,
    ) {

      this.baseUrl   = 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response';
    
    }
  // Http Headers

  
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,PUT,OPTIONS",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Headers": "*"
    })
  };


  postData<T>(moduleUrl: string, data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + moduleUrl, data).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  putData<T>(moduleUrl: string, data: any): Observable<T> {
    return this.http.put<T>(this.baseUrl + moduleUrl, data).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  postData1<T>(moduleUrl: string, data: any): Observable<T> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<T>(this.baseUrl + moduleUrl, data,
      {
        headers: headers
      }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  public getAll<T>(moduleUrl: string, data?: any): Observable<T> {
    if (data === undefined) {
      data = "";
    }
    return this.http.get<T>(decodeURIComponent(this.baseUrl + moduleUrl + data)).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  

  public getSingle<T>(moduleUrl: string, id: any): Observable<T> {
    return this.http.get<T>(this.baseUrl + moduleUrl + id).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

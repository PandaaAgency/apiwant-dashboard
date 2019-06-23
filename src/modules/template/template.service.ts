import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Template} from "../../models/template";
import {MessageService} from "../message/message.service";


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private apiUrl = 'http://symfony.localhost:9942/api/templates';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getTemplates(): Observable<Template[]> {
    return this.http
      .get<Template[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log(`fetched templates`)),
        map(response => {
          return response['hydra:member']
        })
      )
      .pipe(
        catchError(this.handleError<Template[]>('getTemplates', []))
      );
  }

  getTemplate(id: string) : Observable<Template> {
    return this.http
      .get<Template>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched template id=${id}`)),
      )
      .pipe(
        catchError(this.handleError<Template>('getTemplates', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TemplateService: ${message}`);
  }
}

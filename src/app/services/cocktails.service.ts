import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  getAllCocktails(): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
  }

  getCocktailById(id: String): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }


  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${ this._apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of (null))
      );
  }

  searchByCapital( term: string ): Observable<Country[]> {
    const url = ` ${ this._apiUrl }/capital/${ term }`;
    console.log(url)
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([])) // atrapamos el error y retornamos un nuevo objeto que seria un arreglo vacio. El of() te arma el nuevo objeto
      );
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this._apiUrl }/name/${term}`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]))
      );
  }

  searchRegion( region: string ): Observable<Country[]> {
    const url = `${ this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }
}

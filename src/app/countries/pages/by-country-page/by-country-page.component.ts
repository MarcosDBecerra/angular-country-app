import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  constructor( private countryService: CountriesService) {  }


  public countries: Country[] = [];
  public initialValue: string = ''

  ngOnInit(): void {
    this.initialValue = this.countryService.cacheStore.byCountries.term;
    this.countries = this.countryService.cacheStore.byCountries.countries;
  }

  searchByPais( term: string ){
    this.countryService.searchCountry(term).subscribe(
      countries => this.countries = countries
    );
  }
}

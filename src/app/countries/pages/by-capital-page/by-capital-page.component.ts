import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ) {
    this.isLoading = true;
    this.countriesService.searchByCapital( term ).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}

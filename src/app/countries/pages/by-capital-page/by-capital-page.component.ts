import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private contriesService: CountriesService ) {

  }

  searchByCapital( term: string ) {
    this.contriesService.searchByCapital( term ).subscribe( countries => {
      this.countries = countries;
    });
  }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{


  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSucription?: Subscription;

  @Input()
  public placeholder: string ="";

  @Input()
  public initialValue: string = '';

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Output()
  onValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSucription = this.debouncer
    .pipe(
      debounceTime(200)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      })
    }

  ngOnDestroy(): void {
    this.debouncerSucription?.unsubscribe();
  }

  emitValue ( value: string ): void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }
}

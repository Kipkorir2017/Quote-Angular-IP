import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote("","","",new Date());

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    
    this.newQuote = new Quote("","","",new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}

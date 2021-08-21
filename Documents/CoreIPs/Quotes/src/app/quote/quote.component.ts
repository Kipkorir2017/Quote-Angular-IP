import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotesArray:Quote[]=[
    new Quote("We write to taste life twice, in the moment and in retrospect","Anaïs Nin","Benjamin",  new Date(2000,5,14)),
    new Quote("One day I will find the right words, and they will be simple","Jack Kerouac","Vitalis Kirui", new Date(2020,2,20)),
    new Quote("Either write something worth reading or do something worth writing","Benjamin Franklin","Teresia", new Date(2019,3,18)),
    new Quote("Let me live, love, and say it well in good sentences","Sylvia Plath","Joan",  new Date(2021,1,24))
    
  ];

  toggleDetails(index: number) {
    this.quotesArray[index].toggleQuote = !this.quotesArray[index].toggleQuote;
  }
  deleteQuote(isDeleted: any, index: any) {
    if (isDeleted) {
      let remove = confirm(`Are you sure you want to delete this quote?`)
      if (remove) {
        this.quotesArray.splice(index, 1)
      }
    }
  }
  addNewQuote(quote: Quote) {
    this.quotesArray.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

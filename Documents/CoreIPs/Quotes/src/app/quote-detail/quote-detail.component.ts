import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!:Quote;
  @Output() isDeleted=new EventEmitter<boolean>();
  deleteQuote(read: boolean) {
    this.isDeleted.emit(read);
  }
  upCount(index: { upvote: number; }) {
    index.upvote += 1;  
  }
  downCount(index: { downvote: number; }) {
    index.downvote += 1;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

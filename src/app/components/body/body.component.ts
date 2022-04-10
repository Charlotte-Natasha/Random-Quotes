import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/form/form.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  
    constructor(private dialog : MatDialog ){ 
    }
      openDialog() {
        this.dialog.open(FormComponent, {
        });
      }
  
words: Quote[]=[
  new Quote("You know you're in love when you cant fall asleep because reality is finally better than your dreams.", "Dr. Seuss", "Charlotte", new Date("2022-03-02"), 0, 0), 
  new Quote("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M Baruch", "Charles", new Date("2021-04-03"), 0, 0),
  new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein", "Charlotte", new Date("2000-06-01"), 0, 0)
]

addedQuote(words: any) {
  let arraysize = this.words.length;
  words.id = arraysize + 1;
  words.completeDate = new Date(words.completeDate);
  this.words.push(words);
}


  ngOnInit(): void {
  }

  numberOfVotes: number = 0;

  upVoteClick(){
    this.numberOfVotes++;
  }

  numberOfDislikes: number = 0;

  downVoteClick(){
    this.numberOfDislikes++;
  }

  
}

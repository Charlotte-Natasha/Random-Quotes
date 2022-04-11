import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//randomQuotes !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  
  }

 @Output() addQuote = new EventEmitter<Quote>()

randomQuotes = new FormGroup({
  randomQuotes: new FormControl(),
  author: new FormControl(),
  yourName: new FormControl()
})


  getInput(){
    let newQuote = new Quote(this.randomQuotes.value.randomQuotes, this.randomQuotes.value.author, this.randomQuotes.value.name, new Date('2000-06-30'), 0, 0)
   this.addQuote.emit(newQuote)
   
    
    console.log(this.randomQuotes.value.author);
    console.log(this.randomQuotes)
    
  }

// newQuote = new Quote =("", "", "", new Date(), 0, 0)
 /*quote: Quote[] = [
    new Quote ("", "", "", new Date(), 0, 0)
  ]*/
/*this.randomQuotes= this.formBuilder.group({
      randomQuotes :['', Validators.required],
      author : ['', Validators.required],
      yourName :['', Validators.required]
    })*/
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quote } from 'src/app/quote';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

randomQuotes !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.randomQuotes= this.formBuilder.group({
      randomQuotes :['', Validators.required],
      author : ['', Validators.required],
      yourName :['', Validators.required]
    })
    console.log(this.randomQuotes);
  }

  
  //newQuote = new Quote =("", "", "", new Date(), 0, 0)

title = 'stopwatch';

ms: any = '0' + 0;
sec: any = '0' + 0;
min: any = '0' + 0;
hr: any = '0' + 0;
}

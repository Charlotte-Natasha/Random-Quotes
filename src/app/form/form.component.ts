import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  }

saveQuote(){
  console.log(this.randomQuotes.value);
}

title = 'stopwatch';

ms: any = '0' + 0;
sec: any = '0' + 0;
min: any = '0' + 0;
hr: any = '0' + 0;
}

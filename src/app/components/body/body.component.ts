import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/form/form.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  
    constructor(private dialog : MatDialog){

    }
      openDialog() {
        this.dialog.open(FormComponent, {
          
        });
      }
  

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { MathServiceService } from 'app/service/math-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//The service is called in @NgModule
export class AppComponent {
  title: string = '@NgModule Service Exercise';
  newNumber: number;
  numberArray: number[] = [];

  constructor(private _mathsService: MathServiceService) { }

  addNumber() {
    this._mathsService.addNumberToarray(this.newNumber);
    this.numberArray = this._mathsService.getNumberArray();
  }
}

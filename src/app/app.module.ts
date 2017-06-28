import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MathServiceService } from 'app/service/math-service.service';

/* Service is introduced in @NgModule */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MathServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestButtonComponent } from './test-button/test-button.component';
import {ToastModule} from '../../projects/toast/src/lib/toast.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    ToastModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

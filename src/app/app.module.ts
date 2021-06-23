import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ExpenseModule } from './expense/expense.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PsButtonModule } from '@paysafe-ui/components/button';
import { PsHeaderModule } from '@paysafe-ui/components/header';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExpenseModule,
    PsHeaderModule,
    PsButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

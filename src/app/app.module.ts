import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ClienteDescriptionComponent } from './cliente-description/cliente-description.component';

@NgModule({
  declarations: [AppComponent, ClienteListComponent, FilterPipe, ClienteDescriptionComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ClienteDescriptionComponent } from './cliente-description/cliente-description.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CrearVisitaComponent } from './crear-visita/crear-visita.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    FilterPipe,
    ClienteDescriptionComponent,
    CrearVisitaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

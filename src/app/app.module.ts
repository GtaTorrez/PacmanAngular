import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// prime ng


import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import {GeneralService} from './general.service';
import { JugarComponent } from './jugar/jugar.component';
import { VideosComponent } from './videos/videos.component';
import { CriticasComponent } from './criticas/criticas.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    InicioComponent,
    JugarComponent,
    VideosComponent,
    CriticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


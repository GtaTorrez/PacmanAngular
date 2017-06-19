import { Component, OnInit } from '@angular/core';
import { AppComponent } from "app/app.component";
import {GeneralService} from "../general.service"

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

   constructor(private appComponent: AppComponent, private generalService : GeneralService) { }

  ngOnInit() {
    // this.appComponent.cambioTab('Nosotros');

    this.generalService.cargarScriptGrid();
  }

}


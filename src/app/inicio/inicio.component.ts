import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { GeneralService} from '../general.service'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private appComponent: AppComponent, private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.cargarScriptScrolling();
  }

}


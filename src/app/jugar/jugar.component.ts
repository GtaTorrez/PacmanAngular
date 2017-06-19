import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../general.service";
declare var Modernizr:any;
declare var PACMAN:any;

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {

  constructor(private serve:GeneralService) {

    this.serve.cargarPacman();
   }

  ngOnInit() {
    
    var el = document.getElementById("pacman");

    if (Modernizr.canvas && Modernizr.localstorage && 
        Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
      window.setTimeout(function () { PACMAN.init(el, "./assets/"); }, 0);
    } else { 
      el.innerHTML = "Sorry, needs a decent browser<br /><small>" + 
        "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";
    }

    
  }

}

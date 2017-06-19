import { Component, OnInit, ElementRef } from '@angular/core';
import { GeneralService } from './general.service'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private generalService: GeneralService, private el: ElementRef, private route: ActivatedRoute, private _router: Router) { }

  tabSelect: string = '';

  cambioTab(ruta: string) {

    let lis = this.el.nativeElement.querySelectorAll('nav > ul > li ');

    lis.forEach(element => {

      let auxRuta: string = '';

      let tituloText: string = element.innerText;
      // for (var i = 0; i < tituloText.length - 1; i++) {
      //   let letra
      //   if (i == 0) {
      //      console.dir(element.firstChild);
      //      letra = String.fromCharCode (tituloText.charCodeAt(i) + 32);
      //   } else {
      //      letra = tituloText.charAt(i)
      //   }

      //   auxRuta = auxRuta + letra
      // }

      auxRuta = element.firstChild.className

      if (auxRuta.substring(5, auxRuta.length) == ruta) {
        element.className = 'tab-current'
      } else {
        element.className = '';
      }

    });

  }

  ngOnInit(): void {
   // this.generalService.cargarScriptGrid();

    this._router.events.subscribe((url: any) => {
      let ruta = this._router.url.substring(1, this._router.url.length);
      this.cambioTab(ruta);
    });
    // console.log(this.route);

  }

  title = 'app works!';
}


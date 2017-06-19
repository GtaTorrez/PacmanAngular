import { Injectable } from '@angular/core';
const urlGrid = '../../assets/js/cbpGridGallery.js';
const urlScrolling = '../../assets/js/cbpFixedScrollLayout.js';

const pacman = './assets/pacman.js';
const modernize = './assets/modernizr-1.5.min.js';


@Injectable()
export class GeneralService {

  loadAPI: Promise<any>;
  constructor() {
    this.loadAPI = new Promise((resolve) => {
      this.cargarScriptGrid();
    });

  }

  public cargarScriptGrid() {

    console.log(' script Grid');

    let node = document.createElement('script');
    node.src = urlGrid;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

 public cargarScriptScrolling() {

   console.log('Script Scrolling');

    let node = document.createElement('script');
    node.src = urlScrolling;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

public cargarPacman(){

  console.log('Script pacman');

    let node = document.createElement('script');
    node.src = pacman;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    this.cargarModer();
}

public cargarModer(){

  console.log('Script pacman');

    let node = document.createElement('script');
    node.src = modernize;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}
}


import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.scss']
})
export class VistaPerfilComponent implements OnInit {

  buttonPerfiles = {
    titles: ["Button perfil 1", "Button perfil 2", "Button perfil 3", "Button perfil 4"],
    activated: [true, false, false, false]
  }


  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(id: number) {
    this.buttonPerfiles.activated[id] =  !this.buttonPerfiles.activated[id];
  }

}

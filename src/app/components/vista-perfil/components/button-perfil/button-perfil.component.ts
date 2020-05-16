import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-perfil',
  templateUrl: './button-perfil.component.html',
  styleUrls: ['./button-perfil.component.scss'],
})
export class ButtonPerfilComponent implements OnInit {
  @Input() titleButton: string;
  @Input() activated: boolean;

  constructor() {}

  ngOnInit(): void {}


}

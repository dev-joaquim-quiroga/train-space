import { Component, OnInit, Input, SimpleChanges, OnChanges, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button-perfil',
  templateUrl: './button-perfil.component.html',
  styleUrls: ['./button-perfil.component.scss'],
})
export class ButtonPerfilComponent implements OnInit, OnChanges {
  @Input() titleButton: string;
  @Input() activated: boolean;

  constructor(private el: ElementRef,
    private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this);
    console.log(changes);
    if (this.activated) {
      this.renderer.setStyle(this.el.nativeElement.children[0], 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement.children[0], 'color', 'blue');    }
}

}

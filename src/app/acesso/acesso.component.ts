import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animation-banner', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(-30px, 0)' }),
        animate('500ms 0s ease-in-out'),
      ])
    ]),

    trigger('animation-panel', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(50px, 0)' }),
        animate('500ms 0s ease-in-out'),
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public stateBanner: string = 'created'
  constructor() { }

  ngOnInit(): void {
  }

}

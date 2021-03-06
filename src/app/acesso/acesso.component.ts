import { animate, state, style, transition, trigger, keyframes} from '@angular/animations';
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
        animate('1.5s 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateX(0)'}),
          
          style({offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.90, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.92, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.96, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.98, opacity: 1, transform: 'translateY(10px)'}),

        ])),
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public stateBanner: string = 'created';
  public registration: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showCreatePanel(event: boolean): void {
    this.registration = event;
  }

  public showLoginPanel(event: boolean): void {
    this.registration = !event;
  }
}

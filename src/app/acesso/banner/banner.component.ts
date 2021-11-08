import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/model/picture.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', animate('2s ease-in')), //view documentation //view documentation
    ])
  ]
})
export class BannerComponent implements OnInit {

  public initialState: string = 'hidden';
  public images: Picture[] = [
    { state: 'visible', url: '../../../assets/banner-acesso/img_1.png' },
    { state: 'hidden', url: '../../../assets/banner-acesso/img_2.png' },
    { state: 'hidden', url: '../../../assets/banner-acesso/img_3.png' },
    { state: 'hidden', url: '../../../assets/banner-acesso/img_4.png' },
    { state: 'hidden', url: '../../../assets/banner-acesso/img_5.png' }
  ]
  // public images: Picture[] = [
  //   { state: 'visible', url: '../../../assets/banner-acesso/imteste1.png' },
  //   { state: 'hidden', url: '../../../assets/banner-acesso/imteste2.png' },
  //   { state: 'hidden', url: '../../../assets/banner-acesso/imteste3.png' },
  //   { state: 'hidden', url: '../../../assets/banner-acesso/imteste4.png' },
  // ]

  constructor() { }

  ngOnInit(): void {
    this.executeFunctionTime();
  }

  public changeState(): void {

    let aux: number = 0;
    
    for (let i: number = 0; i < this.images.length; i++) {
      if (this.images[i].state == 'visible') {
        this.images[i].state = 'hidden';
        //this.images[i+1].state = 'visible';
        aux = i === this.images.length - 1 ? 0 : i + 1;
        break;
      }
    }

    this.images[aux].state = 'visible';
    //setTimeout(() => { this.changeState() }, 2000)
  this.executeFunctionTime();
    //this.initialState = this.initialState == 'hidden' ? 'visible' : 'hidden';
  }

  private executeFunctionTime(): void {
    setTimeout(() => { this.changeState() }, 3000)
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual, EffectFade } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('swiper', { static: false }) swiper?: any;
  slideNext(){
    this.swiper.swiperRef.slideNext(5000);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(5000);
  }
  
}

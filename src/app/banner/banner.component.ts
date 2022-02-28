import { Component, OnInit,ViewChild } from '@angular/core';
// import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
 
}

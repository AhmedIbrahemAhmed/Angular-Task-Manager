import { Component } from '@angular/core';
@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  items = ["./images/images.jpg", "./images/img.jpg", "./images/newProp.jpg", "./images/overflow.jpg", "./images/Dog-on-fire-meme-1cg7zc.jpg"];
  currentIndex = 0;
  interval: any ;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    return this.currentIndex ;
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    return this.currentIndex ;
  }
  slideshow(){
    if(this.interval)
      return ;
    this.interval =setInterval( ()=>{
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },3000)
  }
  stop(){
    if(!this.interval)return ;
    clearInterval(this.interval) ;
    this.interval = null;
  }
  ngOnInit() {
    this.slideshow() ;
  }
}

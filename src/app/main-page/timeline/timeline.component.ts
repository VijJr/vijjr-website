import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {

  public topPosition = 0;
  public topPositionVal = 12;
  public maxScrollValue = 0;
  public selected = 0;
  public isInv = false;

  public timeline_ranges = [0.75, 0.5, 0.25]

  recievedRef: DOMRect | null= null;

  ngAfterViewInit(): void {
    // Calculate the maximum scroll value based on the total height of the content
    this.maxScrollValue = document.documentElement.scrollHeight;

  }

  


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // Calculate the new top position based on the scroll position
    const scrollPosition = window.scrollY;
    const frac = -0.0000306482*(window.innerWidth) +0.303866
    const frac2 = -0.00016048*(window.innerWidth) + 0.769995

    console.log("WIDTH: " + window.innerWidth)
    console.log("PERCENT: "+(this.topPosition)/this.maxScrollValue)
    
    if(((this.topPosition)/this.maxScrollValue > frac && (this.topPosition)/this.maxScrollValue <= frac2)){
      this.isInv = true;
    }
    else{
      this.isInv = false;
    }



    this.topPosition = Math.min(scrollPosition, this.maxScrollValue); 
    const subt = (970 - window.innerHeight)/60

    this.topPositionVal = 12+((65-subt)*(this.topPosition)/this.maxScrollValue);
    
    if((this.topPosition)/this.maxScrollValue > this.timeline_ranges[0]){
      this.selected = 3;
      if(this.isInv){
        this.selected += 4
      }
    }
    else if((this.topPosition)/this.maxScrollValue > this.timeline_ranges[1]){
      this.selected = 2;
      if(this.isInv){
        this.selected += 4
      }
    }
    else if((this.topPosition)/this.maxScrollValue > this.timeline_ranges[2]){
      this.selected = 1;
      if(this.isInv){
        this.selected += 4
      }
    }
    else{
      this.selected = 0;
      if(this.isInv){
        this.selected += 4
      }
    }

  }
}

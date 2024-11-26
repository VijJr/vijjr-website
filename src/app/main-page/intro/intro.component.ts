import { Component,  ElementRef,  HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  isExpanded: boolean = false;
  tempCount = 0
  isClassApplied: boolean = false;
  act1 = false;
  act2 = false;
  act3 = false;
  act4 = false;

  width = window.innerWidth;



  ngAfterContentInit(): void {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();


  }



  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const targetDiv = document.getElementById('expandDiv');
    if (targetDiv && this.tempCount != 0) {
      const rect = targetDiv.getBoundingClientRect();


      this.isExpanded =  rect.top <= (window.innerHeight - (window.innerHeight*0.6));
      if(!this.isExpanded){
        this.isClassApplied = false

      }
      
    }
    this.tempCount = 1

  }

  applyClassToTargetDiv(): void {
    if(!this.isExpanded){
      return
    }
    this.isClassApplied = true;
  }

  onHover(pl: number): void {
    if(pl == 1){
      this.act1 = true;
    }
    else if(pl ==2){
      this.act2 = true;
    }
    else if(pl ==3){
      this.act3 = true;

    }
    else{
      this.act4 = true;

    }


  }

}

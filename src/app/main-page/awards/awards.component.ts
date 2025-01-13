import { Component } from '@angular/core';

@Component({
  selector: 'awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  openModal = false;
  innerClick = false;
  recentDisplay = -1;

  list = [ 'pvsa.png', 'euler.png', 'gcp.png']
  
  openCertModal(type:number){
    this.recentDisplay = type;
    this.openModal = true
  }
  close(){
    if(!this.innerClick){
      this.openModal = false;

    }
    this.innerClick = false;

  }

}

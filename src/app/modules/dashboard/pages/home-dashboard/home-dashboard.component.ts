import { Component } from '@angular/core';
import { data_media } from 'src/app/mock/data.mock';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent {
   public data = data_media;
   public socialMedia = this.data.social_Media;
   public dateToday = this.data.dateToday;
   public statusBackground = true
   
public backgroundChange(){
  if(this.statusBackground == true){
    document.getElementsByTagName("body")[0].style.backgroundImage="url(assets/images/background/active-states-light-background.png)";
    document.getElementsByTagName("body")[0].style.color="black";
    document.getElementsByName("cardMedia").forEach(element => element.style.background="#f0f3fa")

  }else if(this.statusBackground == false){  
    document.getElementsByTagName("body")[0].style.backgroundImage="url(assets/images/background/active-states-dark-background.png)";
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByName("cardMedia").forEach(element => element.style.background="#252b43")
  }
}
}

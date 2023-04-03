import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-social-media',
  templateUrl: './card-social-media.component.html',
  styleUrls: ['./card-social-media.component.scss']
})
export class CardSocialMediaComponent {
    @Input() dataSocial:any 
}

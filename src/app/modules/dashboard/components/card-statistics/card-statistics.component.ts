import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.scss']
})
export class CardStatisticsComponent {
  @Input() dataToday:any 
}

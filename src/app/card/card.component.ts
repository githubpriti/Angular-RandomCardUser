import { Component,OnInit,Input } from '@angular/core';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   // to use fontAwesome icons
   faEnvelope = faEnvelope;
   faMapMarkerAlt = faMapMarkerAlt;
   faPhone = faPhone;
   faDatabase = faDatabase;

  // user which is passed from the parent component 
  @Input() 
  user : any;

  constructor(){}
  ngOnInit(): void {
    
  }
}

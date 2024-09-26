import {Component, Input} from '@angular/core';
import { MediaItem } from '../../../models';

@Component({
  selector: 'app-treandcard',
  standalone: true,
  imports: [],
  templateUrl: './treandcard.component.html',
  styleUrl: './treandcard.component.css'
})
export class TreandcardComponent {
  @Input() media!: MediaItem;

}

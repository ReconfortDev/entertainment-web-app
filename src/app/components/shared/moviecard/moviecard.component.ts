import {Component, Input} from '@angular/core';
import {MediaItem} from "../../../models";

@Component({
  selector: 'app-moviecard',
  standalone: true,
  imports: [],
  templateUrl: './moviecard.component.html',
  styleUrl: './moviecard.component.css'
})
export class MoviecardComponent {
  @Input() media!: MediaItem;

}

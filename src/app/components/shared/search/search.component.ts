import { FormsModule } from '@angular/forms';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input() placeholder!: string;
  @Output() searchEvent = new EventEmitter<string>();

  searchQuery: string = '';


  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }
}

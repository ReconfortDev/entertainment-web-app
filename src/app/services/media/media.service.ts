import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MediaList} from "../../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = '/data.json';

  constructor(
      private http : HttpClient
  ) { }

  getMedias(): Observable<MediaList> {
    return this.http.get<MediaList>(this.apiUrl);
  }

}

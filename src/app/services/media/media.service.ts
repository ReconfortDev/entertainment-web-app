import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MediaItem, MediaList} from "../../models";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = '/data.json';

  constructor(
    private http: HttpClient
  ) {
  }

  getMedias(): Observable<MediaList> {
    return this.http.get<MediaList>(this.apiUrl);
  }

  search(query: string): Observable<MediaList> {
    const params = new HttpParams().set('q', query);
    return this.http.get<MediaList>(this.apiUrl, { params })
      .pipe(
        map(response =>
          response.filter(item =>
            this.filterByQuery(item, query)
          )
        ),
        catchError(this.handleError)
      );
  }

  updateBookmarkStatus(mediaId: string, isBookmarked: boolean): Observable<boolean> {
    return of(true);
  }



  private filterByQuery(item: MediaItem, query: string): boolean {
    const lowerCaseQuery = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.category.toLowerCase().includes(lowerCaseQuery) ||
      item.rating.toLowerCase().includes(lowerCaseQuery) ||
      item.year.toString().includes(query)
    );
  }


  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    throw new Error(error);
  }

}

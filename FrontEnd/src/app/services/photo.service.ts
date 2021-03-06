import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPaged(page: Number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${environment.urlPicsum}/list?page=${page}&limit=10`
    );
  }
}

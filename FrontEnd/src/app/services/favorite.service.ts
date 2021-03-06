import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoFavorite } from '../models/photo-favorite.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PhotoFavorite[]> {
    return this.http.get<PhotoFavorite[]>(
      `${environment.urlFavoritos}/PhotoFavorites`
    );
  }

  Insert(model: PhotoFavorite): Observable<any> {
    return this.http.post<PhotoFavorite[]>(
      `${environment.urlFavoritos}/PhotoFavorites`,
      model
    );
  }

  Remove(id: string): Observable<any> {
    return this.http.delete<PhotoFavorite[]>(
      `${environment.urlFavoritos}/PhotoFavorites/${id}`
      
    );
  }
}

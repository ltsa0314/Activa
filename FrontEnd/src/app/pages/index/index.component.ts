import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  page: number = 1;
  current: string = '';
  photos: Photo[] = [];
  favoritos: string[] = [];
  constructor(
    private srvPhotos: PhotoService,
    private srvFavorites: FavoriteService
  ) {}

  ngOnInit(): void {
    this.loadPhoto();
  }

  onFavorite(model: Photo) {
    if (this.favoritos.find((x) => x == model.id) != undefined) {
      this.favoritos.splice(this.favoritos.indexOf(model.id, 1));
      this.srvFavorites.Remove(model.id).subscribe((response) => alert('Se elimino de favoritos'))
    } else {
      this.favoritos.push(model.id);
      this.srvFavorites
        .Insert({
          id: model.id,
          author: model.author,
          width: model.width,
          height: model.height,
        })
        .subscribe((response) => alert('Se agrego a favoritos'));
    }
  }
  isFavorite(id: string) {
    return this.favoritos.find((x) => x == id) == id;
  }
  onExpand(id: string) {
    if (this.current == id) {
      this.current = '';
    } else {
      this.current = id;
    }
  }
  onPrev() {
    if (this.page > 1) {
      this.page--;
    }
    this.loadPhoto();
  }
  onNext() {
    this.page++;
    this.loadPhoto();
  }
  loadFavorites() {
    this.favoritos = [];
    this.srvFavorites.getAll().subscribe((response) => {
      response.forEach((favorite) => {
        this.favoritos.push(favorite.id);
      });
    });
  }
  loadPhoto() {
    this.srvPhotos.getPaged(this.page).subscribe((response) => {
      this.photos = response;
      this.loadFavorites();
    });
  }
}

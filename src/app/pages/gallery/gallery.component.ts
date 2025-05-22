import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photos.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOpen = false;
  photos: any[] = [];
  currentPhoto: any = null;
  photos$!: Observable<any[]>;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
   this.photos$ = this.photoService.getPhotos().pipe(
      map((photos: any) => photos.map((photo: any) => ({
        ...photo,
        nameAlt: photo.filename.replace(/\.[^/.]+$/, '')
      })))
    );
  }

  openGallery(photo: any) {
    this.currentPhoto = photo;
    this.galleryOpen = true;
  }

  closeModal(event: any) {
    this.currentPhoto = null;
    this.galleryOpen = false;
  }
}

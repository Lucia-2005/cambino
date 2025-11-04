import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service-taylor';
import { TaylorAlbum } from '../../model/albumInterface-taylor';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './album-list-taylor.html',
  styleUrl: './album-list-taylor.css',
})
export class TaylorComponent {
  albums: TaylorAlbum[] = [];

  constructor(private oJsonplaceholderService: JsonplaceholderService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.oJsonplaceholderService.getAllAlbums().subscribe((albums: TaylorAlbum[]) => {
      console.log(albums);
      this.albums = albums;
    });
  }
}

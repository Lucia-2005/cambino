import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaylorAlbum } from '../model/albumInterface-taylor';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private oHttpClient: HttpClient) {}

  getAllAlbums(): Observable<TaylorAlbum[]> {
    return this.oHttpClient.get<TaylorAlbum[]>('https://taylor-swift-api.sarbo.workers.dev/albums');
  }
}

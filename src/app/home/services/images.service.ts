import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ImagesResponse {
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<string[]> {
    return this.http
      .get<ImagesResponse[]>(`${environment.URL_API}/v2/list?page=2&limit=10`)
      .pipe(map((response) => response.map((image) => image.download_url)));
  }
}

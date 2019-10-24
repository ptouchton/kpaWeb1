import { Http } from '@angular/http';
import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceBase } from '../common/services/serviceBase';


@Injectable()
export class GifPageService extends ServiceBase {

   private apiKey = 'dc6zaTOxFJmzC'; // ideally this would be in an encrypted environment file
   private giphyApi = `//api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=5&q=`;
   constructor(private http: HttpClient) {
          super(http);
    }

    public getGifs(search: string): Observable<any> {

       const url = this.giphyApi + search;

      return this._http.get<any>(url);
    }
}

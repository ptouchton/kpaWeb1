import { Http } from '@angular/http';
import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceBase } from '../common/services/serviceBase';


@Injectable()
export class GifPageService extends ServiceBase{

   private giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&&limit=5&q=';
   private apiKey = 'dc6zaTOxFJmzC';

   constructor(private http: HttpClient) {
          super(http);
    }

    public getGifs(search: string): Observable<any> {

       let url = this.giphyApi + search;

      return this._http.get<any>(url);
    }
}

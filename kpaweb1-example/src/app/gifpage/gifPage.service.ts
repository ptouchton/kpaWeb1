import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from '../common/services/serviceBase';
import { GiphyDetails } from '../common/models/giphyDetails';
import { GiphyImageDetails } from "../common/models/giphyImageDetails";
import { RootObject, Datum } from "../common/models/giphyModel";
import { map } from "rxjs/operators";

@Injectable()
export class GifPageService extends ServiceBase {

   private apiRoot: string = "https://itunes.apple.com/search";
   constructor(private http: HttpClient) {
          super(http);
    }

    public getGifs(search: string): Observable<Datum[]> {

      
      const giphyApi = `//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=5&q=${search}`;

      return this._http.get<RootObject>(giphyApi).map(res => res.data);
    }
}

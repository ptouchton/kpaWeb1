import { Component, OnInit } from '@angular/core';
import { GifPageService } from './gifPage.service';
import { NgForm } from '@angular/forms';
import { GiphyDetails } from '../common/models/giphyDetails';
import { Observable } from 'rxjs';
import { RootObject, Datum } from "../common/models/giphyModel";
@Component({
  selector: 'kpa-gif-page',
  templateUrl: './gifPage.component.html',
  styleUrls: ['./gifPage.component.scss']
})
export class GifPageComponent implements OnInit {

  public SearchTerm = '';
  public submitted = false;
  public gifSearchForm: NgForm;
  public results: Observable<Datum[]>;

  constructor(private _service: GifPageService) { }

  ngOnInit() {
  }

  public onSubmit(formValid: boolean): boolean {
        this.submitted = true;

        // stop here if form is invalid
        if (!formValid) {
          return false;
        }

        this.results = this._service.getGifs(this.SearchTerm);
        let i = 1;
  }

}

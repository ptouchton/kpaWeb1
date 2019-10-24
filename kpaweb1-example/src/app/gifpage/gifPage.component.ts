import { Component, OnInit } from '@angular/core';
import { GifPageService } from './gifPage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'kpa-gif-page',
  templateUrl: './gifPage.component.html',
  styleUrls: ['./gifPage.component.scss']
})
export class GifPageComponent implements OnInit {

  public SearchTerm = '';
  public submitted = false;
  public gifSearchForm: NgForm;
  public returnedGifs: any;

  constructor(private _service: GifPageService) { }

  ngOnInit() {
  }

  public onSubmit(formValid: boolean) : boolean {
        this.submitted = true;

        // stop here if form is invalid
        if (!formValid) {
          return false;
        }

        this._service.getGifs(this.SearchTerm).subscribe(results => {this.returnedGifs = results.data});

    }

}

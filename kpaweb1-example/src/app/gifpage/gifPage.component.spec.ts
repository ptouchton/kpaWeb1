import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GifPageComponent } from './gifPage.component';
import { GifPageService } from './gifPage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('GifPageComponent', () => {
  let component: GifPageComponent;
  let fixture: ComponentFixture<GifPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifPageComponent ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [GifPageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

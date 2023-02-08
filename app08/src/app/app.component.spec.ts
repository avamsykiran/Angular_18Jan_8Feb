import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Testing Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Testing Demo');
  });

  it('should render title in a h3 element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header>h3')?.textContent).toContain('Angular Testing Demo');
  });

  it('should render a title "Angular Button Click Event Testing" when button clicked ',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let btn = compiled.querySelector("button");
    btn?.click();
    fixture.detectChanges();
    const compiledAfterBtnClicked = fixture.nativeElement as HTMLElement;
    expect(compiledAfterBtnClicked.querySelector('header>h3')?.textContent)
      .toContain('Angular Button Click Event Testing');
  });
});

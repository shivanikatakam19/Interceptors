import { HttpClient } from '@angular/common/http';
import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'angularElement';
  apiKey = '47b5d8d0e1554bcc87a49e2b6c9b5180'
  articles: any = []

  ngOnInit(): void {
    this.getData()
  }
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`).subscribe((data: any) => {
      this.articles = data['articles']
    });
  }
}

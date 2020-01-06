import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <h2>
        From Node.js: {{ message }}
      </h2>
    </div>
  `,
  styles: []
})
export class AppComponent {
  message = 'connecting...';

  constructor(private http: HttpClient) {
    this.http.get('/api/')
    .pipe(take(1))
    .subscribe((data: any) => this.message = data.message);
  }
}

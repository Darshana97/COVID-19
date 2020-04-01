import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = 'https://hpb.health.gov.lk/api/get-current-statistical?fbclid=IwAR1eafcuQN781zHjhEutTsE06B40gkoa1L4k3TgM2yCWrAr4OZW8LGoGhGo';
  latest_updated_time = "";
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      this.latest_updated_time=data["data"].update_date_time;
    })
  }

}

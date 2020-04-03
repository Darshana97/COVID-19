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
  local_info_data = "";
  local_total = "";
  local_individual_hospital = "";
  local_death_people = "";
  local_new_death_people = "";
  local_recovered_people = "";
  local_active_cases_people = "";
  global_new_cases_people = "";
  global_total_cases_people = "";
  global_deaths_people = "";
  global_new_deaths_people = "";
  global_recovered_people = "";
  hospitals_data: any = [
    { "id": "", "hospital_id": "", "cumulative_local": "", "cumulative_foreign": "", "treatment_local": "", "treatment_foreign": "", "created_at": "", "updated_at": "", "deleted_at": "", "cumulative_total": "", "treatment_total": "", "hospital": [{ "id": "", "name": "", "name_si": "", "name_ta": "", "created_at": "", "updated_at": "", "deleted_at": "" }] }
  ];

 



  constructor(private http: HttpClient) {

    this.http.get(this.url).toPromise().then(data => {

      console.log(data);
      this.latest_updated_time = data["data"].update_date_time;
      this.local_info_data = data["data"].local_new_cases;
      this.local_total = data["data"].local_total_cases;
      this.local_individual_hospital = data["data"].local_total_number_of_individuals_in_hospitals;
      this.local_death_people = data["data"].local_deaths;
      this.local_new_death_people = data["data"].local_new_deaths;
      this.local_recovered_people = data["data"].local_recovered;
      this.local_active_cases_people = data["data"].local_active_cases;
      this.global_new_cases_people = data["data"].global_new_cases;
      this.global_total_cases_people = data["data"].global_total_cases;
      this.global_deaths_people = data["data"].global_deaths;
      this.global_new_deaths_people = data["data"].global_new_deaths;
      this.global_recovered_people = data["data"].global_recovered;
      this.hospitals_data = data["data"].hospital_data;
      

    })
  }

}

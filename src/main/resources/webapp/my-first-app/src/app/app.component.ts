import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent  implements OnInit {
  testAngular: FormGroup;



  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  private url: string = 'http://localhost:8080/hello';

  onSubmit() {
    this.postOrder(this.testAngular.value);
  }

  ngOnInit() {
    this.initForm();
  }


  postOrder(order) {
    const body = order.name;
    this.httpClient.post<String>(this.url, body).subscribe();

  }

  private initForm() {
    this.testAngular = this.fb.group({
      name: ['']  });
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Help To Buy';
  documents: any;

  constructor(
    private commonService: CommonService
  ) {

    
   }

  ngOnInit() {
    // this.commonService.saveData(obj).then(response => {
    //   console.log(response);
    // }).catch(error => {
    //   console.log(error);
    // });
  };
}

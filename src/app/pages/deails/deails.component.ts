import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-deails',
  templateUrl: './deails.component.html',
  styleUrls: ['./deails.component.css']
})
export class DeailsComponent implements OnInit {
  deatils: any;
  constructor(private commonService: CommonService) {
    this.deatils = JSON.parse(localStorage.getItem("proDetails"));
  }

  ngOnInit(): void {
  }



}

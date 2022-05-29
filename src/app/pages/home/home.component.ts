import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  properties: any;
  filterProperties: any;
  areaNames = ['Viman Nagar', 'Kondhwa', 'Baner', 'Hadapsar', 'Wakad', 'Kothrud', 'Vadgaon Sheri', 'Hinjewadi', 'Kharadi', 'Camp', 'Deccan', 'Shivaji Nagar', 'Balewadi', 'Pimple saudagar', 'Koregaon park', 'Mahalunge', 'Wagholi', 'Thergaon', 'Fursungi', 'Magarpatta city', 'Kalyani Nagar', 'Warje malwadi', 'Talawade', 'Karve Nagar'];
  areaName = '';
  houseType = '';
  price = ''
  bedroom = '';
  balcony = '';
  parking = '';
  floor = '';
  lift = '';
  facing = '';
  gated = '';
  filterArray = [];
  pageNumber = 1;
  constructor(private commonService: CommonService, private router: Router) {
    this.commonService.getDocuments(
    ).subscribe((response: any) => {
      if (response) {
        this.properties = response.map((item, index) => {
          return {
            $key: item.key,
            ...item.payload.val(),
            index: index
          }
        });
        this.filterProperties = this.properties.slice(1 * 9, 1 * 9 + 9);
        console.log(this.filterProperties);

      } else {
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);

      return;
    });
  }

  ngOnInit(): void {
  }

  findByArea(area) {
    console.log(area);
    this.filterArray = [];
    this.houseType = '';
    this.price = ''
    this.bedroom = '';
    this.balcony = '';
    this.parking = '';
    this.floor = '';
    this.lift = '';
    this.facing = '';
    this.gated = '';
    if (this.filterArray.length != 0) {
      this.filterProperties = this.filterArray.filter(a => a.Area == area).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Area == area);
      this.filterProperties = this.properties.filter(a => a.Area == area).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByHouseType(houseType) {
    if (this.filterArray.length != 0) {
      console.log(houseType, 'if');
      this.filterArray = this.filterArray.filter(a => a.House_Type == houseType);
      this.filterProperties = this.filterArray.filter(a => a.House_Type == houseType).slice(1 * 9, 1 * 9 + 9);
    } else {
      console.log(houseType, 'else');
      this.filterArray = this.properties.filter(a => a.House_Type == houseType);
      this.filterProperties = this.properties.filter(a => a.House_Type == houseType).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByPrice(price) {
    console.log(price);
    var priceRange = price.split("-");
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Price_in_Lacs > priceRange[0] && a.Price_in_Lacs < priceRange[1]);
      this.filterProperties = this.filterArray.filter(a => a.Price_in_Lacs > priceRange[0] && a.Price_in_Lacs < priceRange[1]).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Price_in_Lacs > priceRange[0] && a.Price_in_Lacs < priceRange[1]);
      this.filterProperties = this.properties.filter(a => a.Price_in_Lacs > priceRange[0] && a.Price_in_Lacs < priceRange[1]).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByBedroom(bedroom) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Bedroom == bedroom);
      this.filterProperties = this.filterArray.filter(a => a.Bedroom == bedroom).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Bedroom == bedroom);
      this.filterProperties = this.properties.filter(a => a.Bedroom == bedroom).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByBalcony(balcony) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Balcony == balcony);
      this.filterProperties = this.filterArray.filter(a => a.Balcony == balcony).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Balcony == balcony);
      this.filterProperties = this.properties.filter(a => a.Balcony == balcony).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByParking(parking) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Parking == parking);
      this.filterProperties = this.filterArray.filter(a => a.Parking == parking).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Parking == parking);
      this.filterProperties = this.properties.filter(a => a.Parking == parking).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByFloor(floor) {

    if (floor == 11) {
      if (this.filterArray.length != 0) {
        this.filterArray = this.filterArray.filter(a => a.Floor == floor);
        this.filterProperties = this.filterArray.filter(a => a.Floor > floor).slice(1 * 9, 1 * 9 + 9);
      } else {
        this.filterArray = this.properties.filter(a => a.Floor > floor);
        this.filterProperties = this.properties.filter(a => a.Floor > floor).slice(1 * 9, 1 * 9 + 9);
      }
    } else {
      if (this.filterArray.length != 0) {
        this.filterArray = this.filterArray.filter(a => a.Floor == floor);
        this.filterProperties = this.filterArray.filter(a => a.Floor == floor).slice(1 * 9, 1 * 9 + 9);
      } else {
        this.filterArray = this.properties.filter(a => a.Floor == floor);
        this.filterProperties = this.properties.filter(a => a.Floor == floor).slice(1 * 9, 1 * 9 + 9);
      }
    }
  }


  findByLift(lift) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Lift == lift);
      this.filterProperties = this.filterArray.filter(a => a.Lift == lift).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Lift == lift);
      this.filterProperties = this.properties.filter(a => a.Lift == lift).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByFacing(facing) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Facing == facing);
      this.filterProperties = this.filterArray.filter(a => a.Facing == facing).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Facing == facing);
      this.filterProperties = this.properties.filter(a => a.Facing == facing).slice(1 * 9, 1 * 9 + 9);
    }
  }

  findByGated(gated) {
    if (this.filterArray.length != 0) {
      this.filterArray = this.filterArray.filter(a => a.Gated_Security == gated);
      this.filterProperties = this.filterArray.filter(a => a.Gated_Security == gated).slice(1 * 9, 1 * 9 + 9);
    } else {
      this.filterArray = this.properties.filter(a => a.Gated_Security == gated);
      this.filterProperties = this.properties.filter(a => a.Gated_Security == gated).slice(1 * 9, 1 * 9 + 9);
    }
  }

  next() {
    this.pageNumber = this.pageNumber + 1;
    if (this.filterArray.length != 0) {
      this.filterProperties = this.filterArray.slice(this.pageNumber * 9, this.pageNumber * 9 + 9);
    } else {
      this.filterProperties = this.properties.slice(this.pageNumber * 9, this.pageNumber * 9 + 9);
    }
  }

  pervious() {
    this.pageNumber = this.pageNumber - 1;
    if (this.filterArray.length != 0) {
      this.filterProperties = this.filterArray.slice(this.pageNumber * 9, this.pageNumber * 9 + 9);
    } else {
      this.filterProperties = this.properties.slice(this.pageNumber * 9, this.pageNumber * 9 + 9);
    }
  }

  clearFilter() {
    this.areaName = '';
    this.houseType = '';
    this.price = ''
    this.bedroom = '';
    this.balcony = '';
    this.parking = '';
    this.floor = '';
    this.lift = '';
    this.facing = '';
    this.gated = '';
    this.filterArray = [];
    this.filterProperties = this.properties.slice(1 * 9, 1 * 9 + 9);
  }

  details(item) {
    localStorage.setItem("proDetails", JSON.stringify(item));
    this.router.navigate(['details']);
  }

  

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  deatils: any = {
    Age_of_Building: "",
    Apartment: "",
    Area: "",
    Balcony: "",
    Bathroom: "",
    Bedroom: "",
    Builtup_SqFit: "",
    Carpet_SqFit: "",
    Children_Play_Area: "",
    Club_house: "",
    Facing: "",
    Fire_Safety: "",
    Floor: "",
    Furnishing_Status: "",
    Gas_Pipeline: "",
    Gated_Security: "",
    Gym: "",
    House_Type: "",
    Lift: "",
    Maintenance: "",
    Parking: "",
    Power_Backup: "",
    Price_in_Lacs: "",
    Sewage_Treatment_Plant: "",
    Shopping_Center: "",
    Swimming_Pool: "",
    Visitor_Parking: "",
    pmc_pcmc: "PMC",
  };
  areaNames = ['Viman Nagar', 'Kondhwa', 'Baner', 'Hadapsar', 'Wakad', 'Kothrud', 'Vadgaon Sheri', 'Hinjewadi', 'Kharadi', 'Camp', 'Deccan', 'Shivaji Nagar', 'Balewadi', 'Pimple saudagar', 'Koregaon park', 'Mahalunge', 'Wagholi', 'Thergaon', 'Fursungi', 'Magarpatta city', 'Kalyani Nagar', 'Warje malwadi', 'Talawade', 'Karve Nagar'];
  houseType = [{ value: 0, name: '1 RK' }, { value: 1, name: '1 BHK' }, { value: 2, name: '2 BHK' }, { value: 3, name: '3 BHK' }, { value: 4, name: '4 BHK' }, { value: 5, name: '4+ BHK' }];
  parking = [{ value: 0, name: 'None' }, { value: 1, name: 'Bike' }, { value: 2, name: 'Car' }, { value: 3, name: 'Both' }];
  ages = [{ value: 0, name: 'Under Construction' }, { value: 1, name: 'Newly Construction' }, { value: 2, name: '1-3 Year Construction' }, { value: 3, name: '3 - 6 Year Construction' }, { value: 4, name: '6 - 10 Year Construction' }, { value: 5, name: 'Greater then 10 year' }];
  bedroom = [{ value: 1, name: '1 Bedroom' }, { value: 2, name: '2 Bedroom' }, { value: 3, name: '3 Bedroom' }, { value: 4, name: '4 Bedroom' }];
  furnishing = [{ value: 0, name: 'Unfurnished' }, { value: 1, name: 'Semi Furnished' }, { value: 2, name: 'Fully Furnished' }];
  bathroom = [{ value: 1, name: '1 Bathroom' }, { value: 2, name: '2 Bathroom' }, { value: 3, name: '3 Bathroom' }, { value: 4, name: '4 Bathroom' }, { value: 5, name: '5 Bathroom' }, { value: 6, name: '6 Bathroom' }, { value: 7, name: '7 Bathroom' }, { value: 8, name: '8 Bathroom' }];
  balcony = [{ value: 0, name: 'None' }, { value: 1, name: '1 Balcony' }, { value: 2, name: '2 Balcony' }, { value: 3, name: '3 Balcony' }, { value: 4, name: '4 Balcony' }, { value: 5, name: '5 Balcony' }, { value: 6, name: '6 Balcony' }, { value: 7, name: '7 Balcony' }];
  power = [{ value: 0, name: 'None' }, { value: 1, name: 'Partial' }, { value: 2, name: 'Full' }];
  facing = [{ value: 0, name: `Don'T Know` }, { value: 1, name: 'East' }, { value: 2, name: 'West' }, { value: 3, name: 'North' }, { value: 4, name: 'South' }, { value: 5, name: 'North - East' }, { value: 6, name: 'North - West' }, { value: 7, name: 'South - East' }, { value: 8, name: 'South - West' }];
  gated = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  lift = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  gym = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  shopping = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  gas = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  sewage = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  fire = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  club = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  swimming = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  children = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  visitor = [{ value: 0, name: `No` }, { value: 1, name: 'Yes' }];
  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  save(data) {
    this.commonService.saveData(data).then(response => {
      console.log(response);
      this.deatils = {
        Age_of_Building: "",
        Apartment: "",
        Area: "",
        Balcony: "",
        Bathroom: "",
        Bedroom: "",
        Builtup_SqFit: "",
        Carpet_SqFit: "",
        Children_Play_Area: "",
        Club_house: "",
        Facing: "",
        Fire_Safety: "",
        Floor: "",
        Furnishing_Status: "",
        Gas_Pipeline: "",
        Gated_Security: "",
        Gym: "",
        House_Type: "",
        Lift: "",
        Maintenance: "",
        Parking: "",
        Power_Backup: "",
        Price_in_Lacs: "",
        Sewage_Treatment_Plant: "",
        Shopping_Center: "",
        Swimming_Pool: "",
        Visitor_Parking: "",
        pmc_pcmc: "PMC",
      };
    }).catch(error => {
      console.log(error);
    });
  }

  cancel() {
    this.deatils = {
      Age_of_Building: "",
      Apartment: "",
      Area: "",
      Balcony: "",
      Bathroom: "",
      Bedroom: "",
      Builtup_SqFit: "",
      Carpet_SqFit: "",
      Children_Play_Area: "",
      Club_house: "",
      Facing: "",
      Fire_Safety: "",
      Floor: "",
      Furnishing_Status: "",
      Gas_Pipeline: "",
      Gated_Security: "",
      Gym: "",
      House_Type: "",
      Lift: "",
      Maintenance: "",
      Parking: "",
      Power_Backup: "",
      Price_in_Lacs: "",
      Sewage_Treatment_Plant: "",
      Shopping_Center: "",
      Swimming_Pool: "",
      Visitor_Parking: "",
      pmc_pcmc: "PMC",
    };
  };
}

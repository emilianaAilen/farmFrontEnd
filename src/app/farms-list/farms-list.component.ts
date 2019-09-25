import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.css']
})

export class FarmsListComponent implements OnInit {
  Farms: any = [];

  farmName = ""
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadFarms();
  }

  loadFarms() {
    return this.restApi.getFarms().subscribe(data => this.Farms = data);
  }

  addFarm(){
    return this.restApi.addFarm().subscribe(data => this.Farms = data);
  }
}

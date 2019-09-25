import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chickens-list',
  templateUrl: './chickens-list.component.html',
  styleUrls: ['./chickens-list.component.scss']
})

export class ChickensListComponent implements OnInit {
  Chickens: any = [];

  constructor(public restApi: RestApiService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.loadChickens();
  }

  loadChickens() {
    return this.restApi.getChickens(this.rutaActiva.snapshot.params.id).subscribe(data => this.Chickens = data);
  }

  addChicken(){
    this.restApi.addChicken(this.rutaActiva.snapshot.params.id).subscribe(data => this.loadChickens());
  }

  addEgg(id) {
    this.restApi.addEggs(id).subscribe(data => this.loadChickens());
  }

  deleteChicken(id) {
    if(window.confirm('Are you sure you want to delete this chicken?')) {
      this.restApi.deleteChicken(id)
      .subscribe(data => this.loadChickens());
    }
  }
}

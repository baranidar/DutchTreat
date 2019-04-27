import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'the-cart',
    templateUrl: "cart.component.html",
  styleUrls: []
})

export class cartComponent {

    constructor(private data: DataService) {
       
    }

 }

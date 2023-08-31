import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService){}

  ngOnInit(): void{

  }
  public listAddItem(value:string){
   return this.foodListService.foodListAdd(value).subscribe(
    res => this.foodListService.foodListAlert(res),
    error => error
   )
  }
}

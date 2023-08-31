import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {


  constructor(private foodListService:FoodListService){}

  public list: Array<FoodList> = [];

  ngOnInit(): any{
   this.foodListService.foodList().subscribe(
    res => this.list = res,
    error => console.log(error)
    );
   
    this.foodListService.emitEvent.subscribe(
      res => {
       alert(`Você add => ${res.nome}`)
       return this.list.push(res)
      }
    );
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.list = this.list.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }

  public foodListPut(value:string,id:number){
    this.foodListService.foodListPut(value,id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }
}

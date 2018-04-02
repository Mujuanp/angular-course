import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
       new Ingredient('drugs', 50)
      // new Ingredient('more drugs', 500)
    ];

    // this.ingredients.push(new Ingredient('a', 2));
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  showDetails: boolean;

  constructor() {
    this.showDetails = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.showDetails = !this.showDetails;
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Zupa', 'This is zupa (not a Sparta XD)', 'http://brenherrera.com/wp-content/uploads/2014/10/Ecuadorian-Chicken-1.jpg'),
    new Recipe('Zupa', 'This is zupa (not a Sparta XD)', 'http://brenherrera.com/wp-content/uploads/2014/10/Ecuadorian-Chicken-1.jpg'),
    new Recipe('Zupa', 'This is zupa (not a Sparta XD)', 'http://brenherrera.com/wp-content/uploads/2014/10/Ecuadorian-Chicken-1.jpg'),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(): void {
    this.recipes.push(new Recipe('Zupa', 'This is zupa (not a Sparta XD)', 'http://brenherrera.com/wp-content/uploads/2014/10/Ecuadorian-Chicken-1.jpg'));
  }
}

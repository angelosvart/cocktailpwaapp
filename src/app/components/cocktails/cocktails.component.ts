import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsService
      .getAllCocktails()
      .subscribe(cocktails => this.cocktails = cocktails.drinks)
  }

}

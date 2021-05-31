import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailDetail } from 'src/app/models/cocktaildetail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  cocktail: CocktailDetail;

  constructor(private cocktailsService: CocktailsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.cocktailsService.getCocktailById(id).subscribe((cocktail) => {
      if (!cocktail.drinks) {
        return this.router.navigateByUrl('/');
      }

      this.cocktail = cocktail.drinks[0];
    })
  }

}

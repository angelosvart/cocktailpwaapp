import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';

const routes: Routes = [
  { path: '', component: CocktailsComponent },
  { path: 'cocktail/:id', component: CocktailComponent },
  { path: '**', component: CocktailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

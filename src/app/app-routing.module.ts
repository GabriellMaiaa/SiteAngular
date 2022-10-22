import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {path: 'categoria', component:CategoriaComponent},
  {path: 'home',component: HomeComponent}, 
  {path: 'menu',component: MenuComponent},
  {path:'about', component:AboutComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

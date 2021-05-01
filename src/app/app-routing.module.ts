import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { ArtistComponent } from "./artist/artist.component";
import { AlbumComponent } from "./album/album.component";
import { SearchComponent } from './search/search.component';

const routes : Routes = [
  {path:'' , component:SearchComponent},
  {path:'about', component:AboutComponent},
  {path:'artist/:id' , component:ArtistComponent},
  {path:'album/:id' , component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

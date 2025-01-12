import { Component } from "@angular/core";
import { Artist } from "../Artist";
import { SpotifyService } from "../services/spotify.service";

@Component({

    selector: 'search',
    templateUrl: 'search.component.html',
    providers:[SpotifyService],
    standalone: false
})

export class SearchComponent{

   searchStr:string;
   searchRes;
   constructor(private _spotifyService:SpotifyService){}

   searchMusic(){
       this._spotifyService.getToken()
         .subscribe(res => {
             this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
               .subscribe(res=> {
                 this.searchRes = res['artists'].items;
            })
         })

    }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';


@Injectable()

export class SpotifyService{
    private searchUrl:string;
    private redirect_uri:string;
    private client_id ='294430e08e9e4216bcbdfb3068ca673f';
    private client_secret = 'e5a76f9a87874b25be3be143eed267bd';
    private access_token:string;
    private ArtistUrl: string;
    private AlbumsUrl:string;
    private AlbumUrl:string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';

    constructor (private _http:HttpClient){

    }
     getToken(){
        var params = ('grant_type=client_credentials');
        let headers = new HttpHeaders();
headers = headers.set('Authorization', 'Basic ' + this.encoded).set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} ).pipe(
        map((res: any)=> res));
     }



     searchMusic(str:string, type='artist' ,token:string){
       this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
         const headers = new HttpHeaders({'Authorization':'Bearer ' + token});
       return this._http.get(this.searchUrl , {headers : headers}).pipe(
       map((res: Response) => res))


   }

    getArtist(id:string ,token:string){

       this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+ id;

      const headers = new HttpHeaders({'Authorization':'Bearer ' + token});

       return this._http.get(this.ArtistUrl , {headers : headers}).pipe(
       map((res: Response) => res))


   }



     getAlbums(artistId:string ,token:string){

       this.AlbumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId + '/albums/?query=&limit=50';

      const headers = new HttpHeaders({'Authorization':'Bearer ' + token});

       return this._http.get(this.AlbumsUrl , {headers : headers}).pipe(
       map((res: Response) => res))


   }



   getAlbum(id:string ,token:string){

       this.AlbumUrl = 'https://api.spotify.com/v1/albums/'+id;

      const headers = new HttpHeaders({'Authorization':'Bearer ' + token});

       return this._http.get(this.AlbumUrl , {headers : headers}).pipe(
        map((res: Response) => res))

   }


}

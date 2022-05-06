import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  constructor(private httpClient:HttpClient) { }

GetValData():Observable<any>{
  return this.httpClient.get('https://valorant-api.com/v1/version');

}


}

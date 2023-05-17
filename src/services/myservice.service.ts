import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
  export class MyserviceService {

  constructor(private http:HttpClient) { }

    adduser(data:any)
    {
      return this.http.post(`${environment.url}/directories`,data)
    }

    addalluser()
    {
     return this.http.get(`${environment.url}/directories`)
    }

}

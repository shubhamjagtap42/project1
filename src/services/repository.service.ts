import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  setRepoId(repoId: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private httpclient:HttpClient) { }

  addRepo(data:any)
  {
    return this.httpclient.post(`${environment.url}/Repository`,data)
  }

  getRepo()
  {
    return this.httpclient.get(`${environment.url}/Repository`)
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  githubApi: string = 'https://api.github.com/users'
  slash: string = '/'

  getUser(userName: string): Observable<any> {
    return this.httpClient.get(this.githubApi + this.slash + userName);
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }
}

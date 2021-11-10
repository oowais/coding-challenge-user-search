import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {usernames} from './cached/usernames';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  githubApi: string = 'https://api.github.com/users'
  slash: string = '/'

  //Handles the REST GET call, using HttpClientModule
  getUser(userName: string): Observable<any> {
    return this.httpClient.get(this.githubApi + this.slash + userName);
  }

  // To open github profile and blog pages in new page instead of the same
  openLink(url: string) {
    window.open(url, "_blank");
  }

  getRandomId(): string {
    const maxSize = usernames.length
    const randomNumber = Math.floor(Math.random() * maxSize);
    return usernames[randomNumber];
  }
}

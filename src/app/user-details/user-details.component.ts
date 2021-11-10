import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss', '../search/search.component.scss']
})
export class UserDetailsComponent {

  user: User;

  constructor(private router: Router,
              private dataService: DataService) {
    this.user = <User>this.router.getCurrentNavigation()?.extras.state;
  }

  dummyUser: User = {
    login: 'oowais',
    avatar_url: 'https://avatars.githubusercontent.com/u/6773030?v=4',
    html_url: 'https://api.github.com/users/oowais',
    name: 'Owais',
    blog: 'https://oowais.github.io/',
    location: 'Bonn, Germany',
    email: null,
    bio: '🏫Learning Python🐍 and Angular😇',
    follower: 5,
    following: 4
  };

  openUrl(url: string): void {
    this.dataService.openLink(url);
  }

}

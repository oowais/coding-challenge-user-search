import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {DataService} from '../data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss', '../search/search.component.scss']
})
export class UserDetailsComponent {

  user: User | undefined;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
    this.route.params.subscribe(val => {
      this.getUserDetails(val.id);
    });
  }

  // user: User = {
  //   login: 'oowais',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/6773030?v=4',
  //   html_url: 'https://api.github.com/users/oowais',
  //   name: 'Owais',
  //   blog: 'https://oowais.github.io/',
  //   location: 'Bonn, Germany',
  //   email: null,
  //   bio: '🏫Learning Python🐍 and Angular😇',
  //   follower: 5,
  //   following: 4
  // };

  openUrl(url: string): void {
    this.dataService.openLink(url);
  }

  getUserDetails(id: string): void {
    this.dataService.getUser(id).subscribe(data => {
      this.user = {
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        name: data.name,
        blog: data.blog,
        location: data.location,
        email: data.email,
        bio: data.bio,
        follower: data.follower,
        following: data.following
      }
    }, error => {
      if (error.error instanceof ErrorEvent) {
        this.openSnackBar(`Error: ${error.error.message}`);
      } else {
        this.openSnackBar(`Error: ${error.message}`);
        switch (error.status) {
          case 404: {
            this.openSnackBar('User \'' + id + '\' doesn\'t exist. You can try \'oowais\', ' +
              '\'ivey\', \'lukas\' or \'takeo\'');
            console.error(error.message);
            break;
          }
          case 403: {
            this.openSnackBar('Access Denied to server, maybe too many calls! Press F12 for more details.');
            console.error(error.message);
            break;
          }
          case 500: {
            this.openSnackBar('Internal Server Error. Press F12 for more details.');
            console.error(error.message);
            break;
          }
          default: {
            this.openSnackBar('Unknown Server Error. Press F12 for more details.');
            console.error(error.message);
          }
        }
      }
    });
  }

  openSnackBar(text: string): void {
    this.snackBar.open(text, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}

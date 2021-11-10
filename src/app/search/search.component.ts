import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Validators, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {User} from '../model/user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService, private _snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  userName = new FormControl('', [Validators.required]);

  onSubmit() {
    this.dataService.getUser(this.userName.value).subscribe(data => {
      const user: User = {
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
      this.router.navigateByUrl('user', {state: user});
    }, error => {
      if (error.error instanceof ErrorEvent) {
        this.openSnackBar(`Error: ${error.error.message}`);
      } else {
        this.openSnackBar(`Error: ${error.message}`);
        switch (error.status) {
          case 404: {
            this.openSnackBar('User \'' + this.userName.value + '\' doesn\'t exist. You can try \'oowais\', ' +
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
    this._snackBar.open(text, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}

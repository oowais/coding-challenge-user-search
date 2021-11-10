import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  userName = new FormControl('', [Validators.required]);

  // Submit button is disabled if validator are fulfilled. On press of submit go to next view with ID as parameter.
  onSubmit(id:string) {
    this.router.navigateByUrl('user/' + id);
  }

  onRandom() {
    const randomId = this.dataService.getRandomId();
    this.onSubmit(randomId);
  }

  OnReturnPress() {
    this.onSubmit(this.userName.value);
  }
}

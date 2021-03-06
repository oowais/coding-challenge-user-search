import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {UserDetailsComponent} from './user-details/user-details.component';

//Main route handling
const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: '**', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

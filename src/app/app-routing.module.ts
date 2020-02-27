import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportDetailsComponent } from './sport-details/sport-details.component';
import { SportlistsComponent } from './sportlists/sportlists.component';

const routes: Routes = [
  { path: 'detail', component: SportDetailsComponent},
  { path: '', component: SportlistsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

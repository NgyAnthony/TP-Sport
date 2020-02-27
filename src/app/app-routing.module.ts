import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportlistsComponent } from './sportlists/sportlists.component';

const routes: Routes = [
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportDetailsComponent } from './sport-details/sport-details.component';

const routes: Routes = [
  { path: 'detail', component: SportDetailsComponent},
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

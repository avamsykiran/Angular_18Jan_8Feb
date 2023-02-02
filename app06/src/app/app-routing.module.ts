import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes =  [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:ConsumersListComponent},
  {path:'add',component:ConsumerFormComponent},
  {path:'edit/:id',component:ConsumerFormComponent},
  {path:'reviews/:id',component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:ConsumersListComponent},
  {path:'add',component:ConsumerFormComponent},
  {path:'edit/:id',component:ConsumerFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConsumersListComponent,
    ConsumerFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

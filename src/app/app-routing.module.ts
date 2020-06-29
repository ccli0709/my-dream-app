import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreachangeComponent } from './areachange/areachange.component';


const routes: Routes = [
  { path: '', redirectTo: '/areachange', pathMatch: 'full' },
  { path: 'areachange', component: AreachangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

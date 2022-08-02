import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserCompanyComponent } from './components/add-user-company/add-user-company.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {path:'',component:AddUserCompanyComponent},
  {path:'list',component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

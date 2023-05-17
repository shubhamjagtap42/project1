import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepolistComponent } from './repolist/repolist.component';
import { DirectivesComponent } from './directives/directives.component';
import { RepositoryComponent } from './repository/repository.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'repolist/:id',component:RepolistComponent
  },
 
  {
    path:'repo', component:RepositoryComponent
  },
  {
    path:'direct',component:DirectivesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  RepolistComponent,
  DirectivesComponent,
  HeaderComponent,
]

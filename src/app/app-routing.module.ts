import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'library',
  //   pathMatch:  'full',
  // },
  {
    path: '**',
    redirectTo: 'library'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

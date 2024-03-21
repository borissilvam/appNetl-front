import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    AuthorPageComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MaterialModule
  ]
})
export class LibraryModule { }

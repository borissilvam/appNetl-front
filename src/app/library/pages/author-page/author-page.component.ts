import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LibraryService } from '../../services/library.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Titles } from '../../interfaces/titles.interface';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css'
})
export class AuthorPageComponent implements OnInit{



  public titles : Titles[] = [];


  public authorName?: string;

  constructor(
    private libraryService: LibraryService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}


  ngOnInit(): void {
     this.activatedRoute.params
     .pipe(

      switchMap(({id}) => this.libraryService.getTitlesByAuthor(id)),

     ).subscribe(
          titles => {
            this.titles = titles
            return;
          }
     )
  }



}

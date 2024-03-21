import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public authors: string[] = [];

  constructor(private libraryService: LibraryService){}


  ngOnInit(): void {
    this.libraryService.getAuthors().subscribe(
      author => this.authors = author.authors
    )
  }


}

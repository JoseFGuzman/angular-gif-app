import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  //private gifsService
  constructor (private gifsService:GifsService){}

  get tags():string[]{
    return this.gifsService.tagHIstory;
  }


  searchTag (tag:string):void{

    this.gifsService.searchTag(tag);

  }
}

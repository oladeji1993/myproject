import { Component, OnInit } from '@angular/core';
import {  ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  articles;
  constructor(private apiService: ApiService) { }

  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
  
 
}


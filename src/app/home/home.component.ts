import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../shared/categories.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesList: CategoryModel[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.get(environment.url + 'categories').subscribe((data: any) => {
      this.categoriesList = data;
      this.categoriesList.sort((a, b) => {
        return a.order - b.order;
      })
      this.categoriesList.filter((category: CategoryModel) => {
        category.imageUrl = environment.frontendUrl + category.imageUrl;
        
      });

    });
  }

}

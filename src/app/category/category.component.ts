import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private httpClient: HttpClient, private categoryService:CategoryService) { }

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data =>{
      this.categories = data;
    })
    }
  }

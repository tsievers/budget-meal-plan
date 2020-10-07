import { Component, OnInit } from '@angular/core';

import { food } from '../lib/food';
import { mockGroceryList } from '../mock-grocery-list';

@Component({
  selector: 'grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.sass']
})
export class GroceryListComponent implements OnInit {
  list: food[] = mockGroceryList;

  constructor() {}

  ngOnInit(): void {}
}

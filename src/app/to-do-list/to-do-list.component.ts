import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from '../to-do-interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  array!: ToDoInterface[];
  constructor() { }

  ngOnInit(): void {
    let res = fetch("http://localhost:3000/todo")
    .then((res) => res.json())
    .then((data:ToDoInterface[]) =>
    {
     this.array = data;
     console.log(this.array);
     this.completeAll();
     console.log(this.array);
    }
    );
  }

  completeAll(){
    this.array = this.array.map(todo => {
      return {...todo,completed : true}
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = [
    {"id": 1, "name": "Learn Angular", "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image" : "../../assets/images/angular2.jpeg"},

    {"id": 2, "name": "Learn Typescript", "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image" : "../../assets/images/typescript.jpeg"},

    {"id": 3, "name": "Learn ReactJs", "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image" : "../../assets/images/react2.png"},
    {"id": 4, "name": "Learn Nodejs", "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image" : "../../assets/images/nodejs2.jpeg"},
  ]
}

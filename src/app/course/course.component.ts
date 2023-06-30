import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';
import { course } from '../model/course.model';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course : course = {}

  constructor(private courseService : CourseServiceService){}

  ngOnInit(): void { 
    this.getData()
  }

  getData(){
    this.courseService.getdata().subscribe(data=>{
      console.log(data);  
      this.course = data ; 
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService : CourseServiceService){}

  ngOnInit(): void { }

  getData(){
    this.courseService.getdata().subscribe(data=>{
      console.log(data);  
    })
  }
}

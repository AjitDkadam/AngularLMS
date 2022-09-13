import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms' 



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  baseURL = "http://localhost:8181";
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  courseForm = new FormGroup({
    id : new FormControl('',[Validators.required]),
    courseName : new FormControl('',[Validators.required]),
    technology : new FormControl('',[Validators.required]),
    courseDuration : new FormControl('',[Validators.required]),
    courseDescription : new FormControl('',[Validators.required]),
  })

  getCourseFormData(data : any){
    this.courseForm.reset();
    alert("Data Added Successfully.");
    
    return this.httpClient.post(this.baseURL+"/addCourse",data).subscribe();
    
  }

}

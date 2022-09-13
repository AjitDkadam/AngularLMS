import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.css']
})
export class ViewAllCourseComponent implements OnInit {
  baseUrl = "http://localhost:8181";
  course: any ;
  status : any;
  constructor(private http : HttpClient) { 
    this.http.get(this.baseUrl+"/getAllCourse").subscribe(data => {
      this.course = data;
      
  })
}

delete(id:any){
  this.http.delete(this.baseUrl+"/delete/"+id).subscribe();
  alert("Record Deleted Successfully.");
  this.http.get(this.baseUrl+"/getAllCourse").subscribe(data => {
    this.course = data;    
})
}


  ngOnInit(): void {
  }

}

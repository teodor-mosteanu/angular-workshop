import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model ='courses';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl())
  }

  find(courseId) {
    return this.http.get(this.getUrlbyId(courseId))
  }

  create(course) {
    return this.http.post(this.getUrl(), course)
  }

  update(course) {
    return this.http.post(this.getUrlbyId(course.id), course)
    
  }

  delete(courseId){
    return this.http.delete(this.getUrlbyId(courseId))
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`
  }

  private getUrlbyId(id) {
    return `${this.getUrl()}/${id}`;
  }
}

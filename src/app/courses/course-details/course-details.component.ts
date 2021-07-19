import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent{
  selectedCourse;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // we set the value so it will not be shared - when typing is not updating the value in all parents untill save is pressed. In parent after save we reload all data
  @Input() set course(value){
    if (value) {
      this.selectedCourse = Object.assign({}, value)
      this.originalTitle = value.title;
    }
  }
}

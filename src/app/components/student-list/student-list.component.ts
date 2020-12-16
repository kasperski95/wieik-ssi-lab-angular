import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsRepositoryService } from 'src/app/services/students-repository.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentRepository: StudentsRepositoryService) {
    this.students = studentRepository.findAll();
  }

  ngOnInit(): void {}
}

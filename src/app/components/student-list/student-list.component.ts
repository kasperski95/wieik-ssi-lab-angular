import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsRepositoryService } from 'src/app/services/students-repository.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() detailsEnabled: boolean;

  students: Student[];
  averageGrade: number;
  activeStudent?: Student;

  constructor(private studentRepository: StudentsRepositoryService) {
    this.students = studentRepository.findAll();
  }

  setActiveStudent(student: Student) {
    if (!this.detailsEnabled) return;

    if (student === this.activeStudent) {
      this.activeStudent = undefined;
    } else {
      this.activeStudent = student;
      this.averageGrade = this.calculateAverageGrade(this.activeStudent);
    }
  }

  private calculateAverageGrade(student: Student) {
    const grades = student.oceny.filter((ocena) => !!ocena.wartosc);
    return (
      grades.reduce((acc, { wartosc }) => acc + wartosc, 0) /
      (grades.length || 1)
    );
  }

  ngOnInit(): void {}
}

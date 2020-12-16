import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentsRepositoryService } from 'src/app/services/students-repository.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentRepository: StudentsRepositoryService
  ) {
    this.subscription = this.route.queryParamMap.subscribe((paramMap) => {
      try {
        const studentId = parseInt(paramMap.get('s'));
        this.student = studentRepository.findOne(studentId);
      } catch (err) {
        document.location.href = '/';
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as Case from 'case';
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
  student?: Student;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentRepository: StudentsRepositoryService,
    private formBuilder: FormBuilder
  ) {
    this.subscription = this.route.queryParamMap.subscribe((paramMap) => {
      try {
        const studentId = parseInt(paramMap.get('s'));
        this.student = studentRepository.findOne(studentId);

        this.form = this.formBuilder.group({
          imie: this.student.imie,
          nazwisko: this.student.nazwisko,
          ...this.student.oceny.reduce((acc, ocena) => {
            return { ...acc, [this.camelCase(ocena.przedmiot)]: ocena.wartosc };
          }, {}),
        });
      } catch (err) {
        this.router.navigate(['/']);
      }
    });
  }

  camelCase(val: string) {
    return Case.camel(val);
  }

  onSubmit(formData: any) {
    try {
      this.student.imie = formData.imie;
      this.student.nazwisko = formData.nazwisko;
      this.student.oceny = this.student.oceny.map((ocena) => {
        const key = this.camelCase(ocena.przedmiot);
        return { przedmiot: ocena.przedmiot, wartosc: formData[key] };
      });

      this.studentRepository.save(this.student);
      this.router.navigate(['/']);
    } catch (err) {
      alert(err?.message || 'Operacja nie powiodła się');
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

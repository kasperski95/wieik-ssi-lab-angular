import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentsRepositoryService } from 'src/app/services/students-repository.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  subjects: string[];
  studentForm: FormGroup;
  subjectForm: FormGroup;

  constructor(
    private studentRepository: StudentsRepositoryService,
    private formBuilder: FormBuilder
  ) {
    this.subjects = studentRepository
      .findAll()[0]
      .oceny.map(({ przedmiot }) => przedmiot);

    this.studentForm = this.formBuilder.group({
      imie: '',
      nazwisko: '',
      nrIndeksu: 0,
    });

    this.subjectForm = this.formBuilder.group({
      przedmiot: '',
    });
  }

  ngOnInit(): void {}

  onSubmitStudent(formData: any) {
    try {
      if (formData.nrIndeksu) {
        if (formData.nrIndeksu < 1) {
          throw new Error('Nieprawidłowy numer indeksu');
        } else {
          if (this.studentRepository.exists(formData.nrIndeksu)) {
            throw new Error('Student istnieje');
          }
        }
      }

      const s = new Student();
      s.imie = formData.imie;
      s.nazwisko = formData.nazwisko;
      s.nrIndeksu = formData.nrIndeksu;
      s.oceny = this.subjects.map((subject) => ({
        przedmiot: subject,
        wartosc: undefined as number,
      }));

      this.studentRepository.save(s);
    } catch (err) {
      alert(err?.message || 'Operacja nie powiodła się');
    }
  }

  onSubmitSubject(formData: any) {
    try {
      this.studentRepository.addSubject(formData.przedmiot);
      this.subjects = this.studentRepository
        .findAll()[0]
        .oceny.map(({ przedmiot }) => przedmiot);
    } catch (err) {
      alert(err?.message || 'Operacja nie powiodła się');
    }
  }
}

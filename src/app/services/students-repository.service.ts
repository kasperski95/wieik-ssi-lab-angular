import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENCI } from './studenci-db';

@Injectable({
  providedIn: 'root',
})
export class StudentsRepositoryService {
  private data = STUDENCI;

  constructor() {}

  findOne(id: number): Student | undefined {
    const result = this.data.find(({ nrIndeksu }) => nrIndeksu === id);
    if (!result) throw new Error('Not found');
    return result;
  }

  exists(id: number): boolean {
    return !!this.data.find((s) => s.nrIndeksu === id);
  }

  findAll(): Student[] {
    return this.data;
  }

  save(student: Student): Student {
    return this.update(student);
  }

  addSubject(subject: string): void {
    if (subject === '') throw new Error();

    this.data = this.data.map((s) => {
      if (s.oceny.some(({ przedmiot }) => przedmiot === subject))
        throw new Error('Przedmiot już istnieje.');
      return {
        ...s,
        oceny: [...s.oceny, { przedmiot: subject, wartosc: undefined }],
      };
    });
  }

  private update(student: Student): Student {
    if (student.imie === undefined || student.imie === '') throw new Error();
    if (student.nazwisko === undefined || student.nazwisko === '')
      throw new Error();
    if (student.nrIndeksu === undefined || student.nrIndeksu < 1)
      throw new Error();

    (student.oceny || []).forEach((ocena) => {
      if (ocena.wartosc < 2 || ocena.wartosc > 5) {
        throw new Error('Ocena musi być większa od 2 i mniejsza od 5.');
      }
    });

    const index = this.data.findIndex((s) => s.nrIndeksu === student.nrIndeksu);

    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.data.push(student);

    return student;
  }
}

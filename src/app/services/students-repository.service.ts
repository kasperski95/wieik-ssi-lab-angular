import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENCI } from './studenci-db';

@Injectable({
  providedIn: 'root',
})
export class StudentsRepositoryService {
  constructor() {}

  findOne(id: number): Student | undefined {
    const result = STUDENCI.find(({ nrIndeksu }) => nrIndeksu === id);
    if (!result) throw new Error('Not found');
    return result;
  }

  exists(id: number): boolean {
    return !!STUDENCI.find((s) => s.nrIndeksu === id);
  }

  findAll(): Student[] {
    return STUDENCI;
  }

  save(student: Student): Student {
    return this.update(student);
  }

  private update(student: Student): Student {
    if (student.imie === undefined || student.imie === '') throw new Error();
    if (student.nazwisko === undefined || student.nazwisko === '')
      throw new Error();
    if (student.nrIndeksu === undefined || student.nrIndeksu < 1)
      throw new Error();

    const index = STUDENCI.findIndex((s) => s.nrIndeksu === student.nrIndeksu);

    if (index > 0) {
      STUDENCI.splice(index, 1);
    }
    STUDENCI.push(student);

    return student;
  }
}

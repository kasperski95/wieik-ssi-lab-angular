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

  findAll(): Student[] {
    return STUDENCI;
  }
}

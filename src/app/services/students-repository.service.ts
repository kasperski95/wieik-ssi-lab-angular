import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENCI } from './studenci-db';

@Injectable({
  providedIn: 'root',
})
export class StudentsRepositoryService {
  constructor() {}

  findAll(): Student[] {
    return STUDENCI;
  }
}

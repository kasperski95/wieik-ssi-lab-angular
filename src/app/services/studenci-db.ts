import { Student } from '../models/student';

export const STUDENCI: Student[] = [
  {
    nrIndeksu: 654321,
    imie: 'Arkadiusz',
    nazwisko: 'Kasprzyk',
    oceny: [
      { przedmiot: 'Sieciowe Systemy Informacyjne', wartosc: 2.0 },
      { przedmiot: 'Techniki Internetowe', wartosc: 2.0 },
      { przedmiot: 'Seminarium Dyplomowe', wartosc: 2.0 },
    ],
  },
  {
    nrIndeksu: 12345,
    imie: 'Jan',
    nazwisko: 'Kowalski',
    oceny: [
      { przedmiot: 'Sieciowe Systemy Informacyjne', wartosc: 5.0 },
      { przedmiot: 'Techniki Internetowe', wartosc: 4.5 },
      { przedmiot: 'Seminarium Dyplomowe', wartosc: 4.0 },
    ],
  },
  {
    nrIndeksu: 23456,
    imie: 'Zbigniew',
    nazwisko: 'Noga',
    oceny: [
      { przedmiot: 'Sieciowe Systemy Informacyjne', wartosc: 4.0 },
      { przedmiot: 'Techniki Internetowe', wartosc: 3.5 },
      { przedmiot: 'Seminarium Dyplomowe', wartosc: 5.0 },
    ],
  },
  {
    nrIndeksu: 34567,
    imie: 'Grażyna',
    nazwisko: 'Nowacka',
    oceny: [
      { przedmiot: 'Sieciowe Systemy Informacyjne', wartosc: 3.0 },
      { przedmiot: 'Techniki Internetowe', wartosc: 3.5 },
      { przedmiot: 'Seminarium Dyplomowe', wartosc: 4.0 },
    ],
  },
  {
    nrIndeksu: 45678,
    imie: 'Adam',
    nazwisko: 'Nowak',
    oceny: [
      { przedmiot: 'Sieciowe Systemy Informacyjne', wartosc: 4.0 },
      { przedmiot: 'Techniki Internetowe', wartosc: 3.5 },
      { przedmiot: 'Seminarium Dyplomowe', wartosc: 5.0 },
    ],
  },
];

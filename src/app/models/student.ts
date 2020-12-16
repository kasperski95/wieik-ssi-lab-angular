class Ocena {
  przedmiot: string;
  wartosc: number;
}

export class Student {
  nrIndeksu: number;
  imie: string;
  nazwisko: string;
  oceny: Ocena[];
}

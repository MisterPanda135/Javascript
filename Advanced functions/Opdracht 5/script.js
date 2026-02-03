const studenten = [
{ naam: 'Jan', cijfer: 7 },
{ naam: 'Piet', cijfer: 8 },
{ naam: 'Klaas', cijfer: 6 },
{ naam: 'Marie', cijfer: 9 }
];

console.log(studenten.filter(x => x.cijfer >= 8));
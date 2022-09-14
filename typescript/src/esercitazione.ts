// export {};

// function welcomePerson(person: Person) {
//   console.log(`Hey ${person.firstName} ${person.lastName}`);
//   return `Hey ${person.firstName} ${person.lastName}`;
// }

// const james = {
//   firstName: "James",
//   lastName: "Quick"
// };

// welcomePerson(james);

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// class Person {
//   protected nome ="Federica"
//   public eta:number
//   constructor(etaparametro:number){
//     this.eta = etaparametro
//     console.log(this.eta);
//   }
//   public saluta() {
//     console.log('Ciao sono ${this.nome}');
//   }
// }
// class Genitore extends Person {
//   public cognome = "Spinelli"
//   constructor(etaparametro:number){
//     super(etaparametro)
//     console.log(this.nome);
//   }
// }
// let federica: Person = new Person(27)
// console.log(federica.eta);

// let Roberto: Genitore = new Genitore(65)
// console.log(Roberto.eta, Roberto.cognome);


class Persona_1 {
  public nome ="Federica"
  public cognome ="Spinelli"
}

class Persona_2 extends Persona_1 {
  public nome = "Claudia"
  public cognome = "Spinelli"
}

let utente_1: Persona_1 = new Persona_1()
console.log('Ciao sono', utente_1.nome, utente_1.cognome);

let utente_2: Persona_2 = new Persona_2()
console.log('Ciao sono', utente_2.nome, utente_2.cognome);
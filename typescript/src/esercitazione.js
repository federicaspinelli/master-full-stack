// export {};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Persona_1 = /** @class */ (function () {
    function Persona_1() {
        this.nome = "Federica";
        this.cognome = "Spinelli";
    }
    return Persona_1;
}());
var Persona_2 = /** @class */ (function (_super) {
    __extends(Persona_2, _super);
    function Persona_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nome = "Claudia";
        _this.cognome = "Spinelli";
        return _this;
    }
    return Persona_2;
}(Persona_1));
var utente_1 = new Persona_1();
console.log('Ciao sono', utente_1.nome, utente_1.cognome);
var utente_2 = new Persona_2();
console.log('Ciao sono', utente_2.nome, utente_2.cognome);

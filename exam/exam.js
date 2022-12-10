export function Person(name, surname, bd, php, js) {
    this.name = name;
    this.surname = surname;
    this.bd = bd;
    this.php = php;
    this.js = js;
  }
Object.assign(Person.prototype, {
    toString() {
      return `${this.fullName()}, БД:${this.bd}, JS:${this.js}, PHP:${this.php}`;
    },
    fullName() {
      return `${this.surname} ${this.name}`;
    },
});
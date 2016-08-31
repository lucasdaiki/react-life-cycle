const people = [];

export default class PersonRepository {
  static list(){
    return new Promise((resolve, reject)=> {
      window.setTimeout(resolve(people), 500);
    });
  }

   static create(person){
    people.push(person);
  }
}

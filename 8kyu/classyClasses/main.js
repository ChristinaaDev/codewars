class Person {
    constructor(name,age,info) {
      this.name = name
      this.age = age
      this.info = `${name}s age is ${age}`
    }
      get getInfo(){
        return this.info
      }
  
    }
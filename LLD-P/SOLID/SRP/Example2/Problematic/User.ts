class User {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }
}

export {User};

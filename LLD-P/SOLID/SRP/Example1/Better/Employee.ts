// This class represents an employee.
export class Employee {
  constructor(
    private id: number,
    private name: string,
    private address: string,
  ) {}

  getEmployeeId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  setName(name: string): void {
    this.name = name;
  }
}

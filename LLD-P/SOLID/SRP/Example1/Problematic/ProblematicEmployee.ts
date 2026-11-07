// Violates SRP: one class handles reporting, salary, and persistence.
export class ProblematicEmployee {
  constructor(
    private id: number,
    private name: string,
    private address: string,
  ) {}

  printPerformanceReport(): void {
    console.log("Performance Report of employee " + this.name);
  }

  computeSalary(): number {
    return 10000.0;
  }

  updateEmployeeDetails(name: string): void {
    console.log("Updating employee details...");
    console.log("Data updated successfully.");
  }

  fetchEmployeesData(): void {
    console.log("Fetching employees data...");
    console.log("Data fetched successfully.");
  }
}


// This class violates SRP as it handles multiple responsibilities.
// It should be refactored into separate classes for each responsibility.
// Here we have multiple reasons to change: performance report, salary computation, and persistence.
// So we segregate these responsibilities into separate classes.

//  It also can called as MONSTER CLASS - a class that does too much and is hard to maintain. it act as GOD CLASS

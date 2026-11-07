// This class is responsible for generating the performance report of an employee.
import { Employee } from "./Employee";

export class EmployeePerformanceReport {
  generateReport(employee: Employee): void {
    console.log("Performance report for " + employee.getName());
  }
}

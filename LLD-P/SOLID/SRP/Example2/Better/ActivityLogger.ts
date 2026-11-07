import { User } from "./User";

class ActivityLogger {
  public logUserActivity(user: User): void {
    console.log(`User ${user.getAge()} is doing something.`);
  }
}

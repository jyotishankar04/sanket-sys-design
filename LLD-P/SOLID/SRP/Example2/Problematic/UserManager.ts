import { User } from "./User";

class UserManager {
  public add(user: User): void {
    if (user.getAge() < 18) {
      console.log(`User is underage! Cannot add.`);
    } else {
      console.log(`User is overage. Can add.`);
    }
  }

  public remove(user: User): void {
    console.log(`Removing user`);
  }

  public update(user: User): void {
    if(user.getAge() < 18) {
      console.log(`User is underage! Cannot update.`);
    } else {
      console.log(`User is overage. Can update.`);
    }
  }

  public get(user: User): User {
    return user;
  }

  // Here this violates the SRP by logging user activity.
  public logUserActivity(user: User): void {
    console.log(`User ${user.getAge()} is doing something.`);
  }
}

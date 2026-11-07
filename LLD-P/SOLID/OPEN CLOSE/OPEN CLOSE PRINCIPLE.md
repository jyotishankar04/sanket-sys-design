# Open/Close Principle

a class should be open for extension but closed for modification
- this means that the class should be able to add new functionality without modifying its existing code


## HOW TO FIX

- if u find the further alteration in the requirements can unnecessaryly modify the existing code or impact the existing functionality of the class, it is violating the open/close principle

```typescript

interface Notification {
  send(): void;
}
```

### EmailNotification.ts file implementing the Notification interface
```typescript
class EmailNotification implements Notification {
  send(): void {
    console.log('Sending email notification');
  }
}
```

### SMSNotification.ts file implementing the Notification interface
```typescript
class SMSNotification implements Notification {
  send(): void {
    console.log('Sending SMS notification');
  }
}
```


- Instead of being tightly coupled to the type of notifications, we can now depend on the `Notification` interface to send notifications

- Even if we introduce a new type of notification, we can simply create a new class that implements the `Notification` interface without modifying the existing code and we can delete the old code

It is a good idea to depend on abstraction rather than concrete implementations

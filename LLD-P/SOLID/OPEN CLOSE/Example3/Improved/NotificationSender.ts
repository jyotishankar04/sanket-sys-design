import { EmailNotification } from "./EmailNotification";
import { NotificationType } from "./NotificationType";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification";
import { Notification } from "./Notification";


class NotificationSender {

  public sendNotification(notifications: Notification[], message: string): void {
    for(let i = 0; i < notifications.length; i++) {
      notifications[i].send(message);
    }
  }
}

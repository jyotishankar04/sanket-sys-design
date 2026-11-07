import { EmailNotification } from "./EmailNotification";
import { NotificationType } from "./NotificationType";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification";

class NotificationSender {

  public sendNotification(notificationType: NotificationType, message: string): void {
    switch (notificationType) {
      case NotificationType.EMAIL:
        new EmailNotification().sendEmailNotification(message);
        break;
      case NotificationType.SMS:
        new SMSNotification().sendSMSNotification(message);
        break;
      case NotificationType.PUSH:
        new PushNotification().sendPushNotification(message);
        break;
    }
  }
}

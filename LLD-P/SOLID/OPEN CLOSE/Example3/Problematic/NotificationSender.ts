import { Notification, NotificationType } from "./NotificationType";

class NotificationSender {
  private notification: Notification = new Notification();
  public sendNotification(notificationType: NotificationType, message: string): void {
    switch (notificationType) {
      case NotificationType.EMAIL:
        this.notification.sendEmailNotification(message);
        break;
      case NotificationType.SMS:
        this.notification.sendSMSNotification(message);
        break;
      case NotificationType.PUSH:
        this.notification.sendPushNotification(message);
        break;
      case NotificationType.WHATSAPP:
        this.notification.sendWhatsAppNotification(message);
        break;
    }
  }
}

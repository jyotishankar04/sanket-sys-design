export enum NotificationType {
  SMS,
  EMAIL,
  PUSH,
  WHATSAPP
}



export class Notification {
  public sendSMSNotification(message: string): void {
    console.log(`Sending SMS notification: ${message}`);
  }

  public sendEmailNotification(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }

  public sendPushNotification(message: string): void {
    console.log(`Sending push notification: ${message}`);
  }

  public sendWhatsAppNotification(message: string): void {
    console.log(`Sending WhatsApp notification: ${message}`);
  }
}

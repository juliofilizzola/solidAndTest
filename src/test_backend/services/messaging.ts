import { IMessaging } from "../classes/interfaces/Messaging";

export class Messaging implements IMessaging {
  sendMessage(msg: string) {
    console.log('Mensagem enviada: %s', msg);
  };
}
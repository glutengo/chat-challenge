import { IMessage } from '../model/message';
import { IMessageDTO } from '../model/message.dto';

export async function fetchMessages(): Promise<IMessage[]> {
  return fetch('/messages').then(res => res.json());
}

export async function sendMessage(message: IMessageDTO): Promise<void> {
  await fetch('messages', { method: 'POST', body: JSON.stringify(message), headers: { 'Content-Type': 'application/json' }})
}

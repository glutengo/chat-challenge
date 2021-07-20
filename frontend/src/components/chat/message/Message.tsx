import { IMessage } from '../../../model/message';

export function Message({message, own}: { message: IMessage, own?: boolean}) {
  const date = new Date(message.timestamp);
  return <div className={`chat-message ${own ? 'chat-message-own' : ''}`}>
    <div className="chat-message-author">{own ? 'You' : message.author}</div>
    <div className="chat-message-content">{message.content}</div>
    <div className="chat-message-date">{date.toLocaleDateString()} {date.toLocaleTimeString()}</div>
  </div>
}

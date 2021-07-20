import { IMessage } from '../../../model/message';

export function Message({message, own}: { message: IMessage, own?: boolean}) {
  return <div className={`chat-message ${own ? 'chat-message-own' : ''}`}>
    <div className="chat-message-author">{own ? 'You' : message.author}</div>
    <div className="chat-message-content">{message.content}</div>
    <div className="chat-message-date">{new Date(message.timestamp).toDateString()}</div>
  </div>
}

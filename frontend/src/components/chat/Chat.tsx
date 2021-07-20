import React, { useEffect, useRef, useState } from 'react';
import { Message } from './message/Message';
import { fetchMessages, sendMessage } from '../../util/api';
import { IMessage } from '../../model/message';
import { InputField } from '../input-field/InputField';
import { useInterval } from '../../util/interval.hook';

export function Chat({author}: {author: string | null}) {

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [updated, setUpdated] = useState<Date>(new Date());
  const messagesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages().then(res => {
      const changed = JSON.stringify(messages) !== JSON.stringify(res);
      setMessages(res);
      if (changed && messagesContainer.current) {
        messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
      }
    });
  }, [updated, messages]);

  useInterval(() => {
    setUpdated(new Date())
  }, 1000);

  const onSubmit = async (content: string) => {
    if (author) {
      await sendMessage({ content, author});
      setUpdated(new Date());
    }
  }

  return <div className="chat">
    <div ref={messagesContainer} className="chat-messages">{
      messages.map(m => (<Message key={m.id} message={m} own={m.author === author}/>))
    }</div>
    <InputField onSubmit={val => onSubmit(val)} disabled={!author}/>
  </div>
}

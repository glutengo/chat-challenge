package net.glutting.chatchallenge.service;

import net.glutting.chatchallenge.dto.MessageDTO;
import net.glutting.chatchallenge.model.Message;

public interface MessagesService {
  public Message[] getMessages();

  public void addMessage(MessageDTO message);
}

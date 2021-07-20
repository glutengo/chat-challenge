package net.glutting.chatchallenge.service;

import net.glutting.chatchallenge.dto.MessageDTO;
import net.glutting.chatchallenge.model.Message;
import net.glutting.chatchallenge.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessagesServiceImpl implements MessagesService {

  @Autowired
  private MessageRepository repository;

  public void addMessage(MessageDTO message) {
    Message m = new Message(message.getContent(), message.getAuthor());
    repository.save(m);
  }

  public Message[] getMessages() {
    return repository.findAll().toArray(new Message[0]);
  }
}

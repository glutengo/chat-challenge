package net.glutting.chatchallenge.controller;

import net.glutting.chatchallenge.dto.MessageDTO;
import net.glutting.chatchallenge.model.Message;
import net.glutting.chatchallenge.service.MessagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesController {

  @Autowired
  private MessagesService service;

  @GetMapping("/messages")
  public Message[] getMessages() {
    return service.getMessages();
  }

  @PostMapping("/messages")
  public void addMessage(@RequestBody MessageDTO message) {
    service.addMessage(message);
  }
}

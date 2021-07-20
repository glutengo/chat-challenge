package net.glutting.chatchallenge.model;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.Random;

public class Message {
  @Id
  private String id;
  private String content;
  private String author;
  private Date timestamp;

  private static Random random = new Random();

  public Message(String content, String author) {
    this.content = content;
    this.author = author;
    this.timestamp = new Date();
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Date getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }
}

package net.glutting.chatchallenge.repository;

import net.glutting.chatchallenge.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
}

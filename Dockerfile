FROM openjdk:11-jdk
COPY backend/target/chat-challenge-0.0.1-SNAPSHOT.jar chat-challenge-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/chat-challenge-0.0.1-SNAPSHOT.jar"]

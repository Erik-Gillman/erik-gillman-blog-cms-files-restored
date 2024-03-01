FROM openjdk:21-ea-1-jdk-slim
COPY . .
RUN ./gradlew bootJar
RUN mv build/libs/backend-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]


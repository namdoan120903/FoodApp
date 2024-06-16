##### Dockerfile #####
FROM maven:3.8.3-openjdk-17 as build

WORKDIR ./src
COPY . .
RUN mvn install -DskipTests=true

FROM openjdk:17-alpine

COPY --from=build src/target/*.jar /run/foodapp.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/run/foodapp.jar"]
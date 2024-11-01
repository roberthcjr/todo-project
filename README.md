# TO-DO :white_check_mark:

## About

A simple system to list tasks that the person should do.

## Initial idea

The user can create new tasks and mark them as pending or done. The user will be able to edit them.

## Future ideas

Add a Pomodoro Timer

## Tecnologies

 - API in express
 - Database in Mongo installed with Docker
 - Front-end in React

 ## How to run

 <mark style="background-color: #a183de; border-radius: 5px">MUST HAVE NODE20 INSTALLED - You can use nvm</mark>

 ### Run a Mongo Instance
 ``` console 
docker pull mongodb/mongodb-community-server:latest
 ```

 ``` console 
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
 ```

 ### Run backend
 ``` console 
cd src/ \
node index.js
 ```
 ## Authors
- [Robert Junior](https://github.com/roberthcjr/)
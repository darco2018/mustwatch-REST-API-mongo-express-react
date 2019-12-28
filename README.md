# Mustwatch - a single page app

### - frontend (React, axios)

### - backend (JSON REST API with mongo & express)

Note: you will also find a different **frontend (vanilla JS, Fetch API)** in the backend's **public** folder. It was first created in a separate project: https://github.com/darco2018/mustwatch-REST-API-mongo-express-JSfrontend

### Functionality overview

> #### Mustwatch enables you to add new movie titles to a list of movies you want to watch in the future & keeps the movies watched in history.

- Add movie title to the Future List
- Move a movie from the Future List to the History List by clicking on it
- Move a movie from the History List to the Future List by clicking on it
- Delete a movie by clicking on the X button

### Getting started

##### DB

- install mongo & mongo CLI on your machine
- start mongo demon & mongo:

```sh
$ sudo service mongod start/status/stop
$ mongo
$ # uncomment dbTest.test(mongoose) in app.js & check it's working
```

##### BACKEND

Run frontend & backend on different ports.
&NewLine;

```sh
$ cd app/rest-api
$ # if it hasn't been done yet, install the backend dependencies:
$ npm i
$ PORT=5000 npm start
$ # go to  http://localhost:5000/ & http://localhost:5000/api/movies
$ # sudo kill -9 $(sudo lsof -t -i:5000) will stop the server
```

- add "proxy": "http://localhost:5000" in the **frontend's** package.json

##### FRONTEND

&NewLine;

```sh
$ cd app/react-frontend
$ npm start
$ # go to  http://localhost:3000/
```

### Created by

(View README.md of https://github.com/darco2018/mustwatch-REST-API-mongo-express to see how the backend API part was created.)

```sh
$ mkdir app
$ cd app
$ git clone https://github.com/darco2018/mustwatch-REST-API-mongo-express-JSfrontend.git
$ mv mustwatch-REST-API-mongo-express-JSfrontend rest-api
$ cd rest-api
$ rm -fr .git
$ npm i
$ cd ..
$ npx create-react-app react-frontend
```

### Time saving tips

- use arrow functions to avoid issues with 'this'

### Useful code snippets when using REACT

```sh

```

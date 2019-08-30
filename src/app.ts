import express from 'express';
import compression from 'compression'; // compresses requests
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';

import { createConnection } from 'typeorm';
import { User } from './entity/User';

// Todo: Remove
createConnection()
  .then(async connection => {
    console.log(connection.isConnected);

    const UserRepository = connection.getRepository(User);

    const user = new User;
    user.username = 'taeho';
    user.password = '1234';
    UserRepository.save(user);
  })
  .catch(console.error);
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

export default app;

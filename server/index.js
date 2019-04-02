require('dotenv').config();
const express = require('express');
const session = require('express-session');
const checkForSession = require('./middleware/checkForSession');
const sc = require('./controllers/swagController');
const ac = require('./controllers/authController');


const app = express();

const { SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(checkForSession);

app.get('/api/swag', sc.read);
app.post('/api/login', ac.login);
app.post('/api/register', ac.register);
app.post('/api/signout', ac.signout);
app.get('/api/user', ac.getUser);


app.listen(SERVER_PORT, () => {
    console.log(`server strolling around park: ${SERVER_PORT}.`);
});
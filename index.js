const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('user server is running');
});

const users = [
  { id: 1, name: 'Alice',email: "alice@dom.com" },
  { id: 2, name: 'Bob',email: "bob@gmail.com" },
  { id: 3, name: 'Charlie',email: "charlie@mail.com" },
  
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
    console.log('post api called', req.body);
    const newUser = req.body;
    newUser.id =users.length +1;
    users.push(newUser)
    res.send(newUser);
});

app.listen(port, () => {
  console.log(`user server is running on port ${port}`);
});
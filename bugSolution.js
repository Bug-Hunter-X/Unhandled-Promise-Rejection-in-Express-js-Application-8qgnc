const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  try {
    // Validate and sanitize user data before sending it to the database
    if (!user.name || !user.email) {
      return res.status(400).send({ error: 'Missing required fields' });
    }
    db.createUser(user).then(createdUser => {
        res.status(201).send(createdUser);
    }).catch(error => {
        console.error('Error creating user:', error);
        res.status(500).send({ error: 'Failed to create user' });
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
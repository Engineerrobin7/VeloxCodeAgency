// index.js

// Required dependencies:
// - express: for creating the server
// - cors: for enabling cross-origin resource sharing
// - firebase-admin: for connecting to Firebase

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// TODO: Replace this with your actual Firebase service account key
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = admin.firestore();

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/data', async (req, res) => {
  const { collectionName, data } = req.body;
  try {
    const docRef = await db.collection(collectionName).add(data);
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get('/data/:collectionName', async (req, res) => {
  const { collectionName } = req.params;
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).send({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email } = req.body;

  try {
    // This does not actually sign the user in, but it does verify that the user exists.
    const userRecord = await admin.auth().getUserByEmail(email);
    res.status(200).send({ uid: userRecord.uid });
  } catch (error) {
    res.status(404).send({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
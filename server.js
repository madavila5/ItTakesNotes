const express = require('express');
const fs = require('fs');
const path = require('path');

const savedEntries = require('./db/db.json');
savedEntries.forEach((element, i) => {element.id = i+1});
fs.writeFileSync('./db/db.json', JSON.stringify(savedEntries));

const app = express();
const PORT = process.env.PORT||3002;

app.use
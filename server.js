const express = require('express');
const fs = require('fs');
const path = require('path');

const savedEntries = require('./db/db.json');
savedEntries.forEach((element, i) => {element.id = i+1});
fs.writeFileSync('./db/db.json', JSON.stringify(savedEntries));

const app = express();
const PORT = process.env.PORT||3002;
//USE
app.use(express.urlencoded ({extended: true}));
app.use(express.join());
app.use(express.static('public'));
//GET
app.get('/', (req,res)=>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.get('/notes', (req,res)=>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/api/notes', (req,res)=>{
    let notes = JSON.parse(fs.readFileSync('./db/db.json', "utf-8"));
    res.json(notes);}
);

const express = require('express');
const cors = require('cors');
const app = express();
var path = require('path');
const PORT = process.env.PORT || 80;
const project = require('./sample.json')
const http = require('http');

const movieData = [];
const seriesData = [];
const bgImages = [];

app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.json());

app.get('/programs', (req, res) => {
  const programType = req.query.programtype;
  if (programType === "movie") {
    if (movieData.length === 0) {
      for (let i = 0; i < project.total; i++) {
        if (project.entries[i].programType === "movie") {
          movieData.push(project.entries[i])
        }
      }
    }
    res.status(200).send(JSON.stringify({
      programs: movieData
    }));
  } else if (programType === "series") {
    if (seriesData.length === 0) {
      for (let i = 0; i < project.total; i++) {
        if (project.entries[i].programType === "series") {
          seriesData.push(project.entries[i])
        }
      }
    }
    res.status(200).send(JSON.stringify({
      programs: seriesData
    }));

  }
  else {
    res.sendStatus(403);
  }
});

app.get('/bg-img', (req, res) => {
  if (bgImages.length === 0) {
    for (let i = 0; i < project.total; i++) {
      if (project.entries[i].images["Poster Art"].width >= 1000) {
        bgImages.push(project.entries[i].images["Poster Art"])
      }
    }
  }
  res.status(200).send(JSON.stringify({
    imageList: bgImages
  }))
})

app.get('/fun-fact', (req, res) => {
  const request = http.get(`http://numbersapi.com/${req.query.year}/year?default=Boring+number+is+boring.`, (response) => {
    let rawData = '';
    response.on('data', chunk => {
      rawData += chunk;
    })
    response.on('end', () => {
      res.status(200).send(JSON.stringify({ funfact: rawData }))
    })
  })
  request.on('error', e => {
    res.sendStatus(404);
    console.log("Error: " + e.message)
  })
})

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
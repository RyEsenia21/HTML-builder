const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(file);
stream.on('data', (chunk) => {
  console.log(chunk.toString());
});
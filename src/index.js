const fs = require('fs');

try {
  const data = fs.readFileSync('src/fakedata.json', 'utf8');
  console.log(data);
} catch (err) {
  console.log("this is error :");
}
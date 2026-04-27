const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let files = [];
walkDir(path.join(__dirname, 'public', 'assets', 'projects'), function(filePath) {
  files.push(filePath.replace(__dirname, '').replace(/\\/g, '/'));
});

console.log(JSON.stringify(files, null, 2));

const fs = require('fs');
const path = require('path');
const contentDir = path.join(process.cwd(), 'src', 'content', 'projects');
const files = fs.readdirSync(contentDir);
files.forEach(f => {
  if (!f.endsWith('.md')) return;
  const content = fs.readFileSync(path.join(contentDir, f), 'utf8');
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const dateMatch = content.match(/pubDate:\s*([^\n]+)/);
  const coverMatch = content.match(/coverImage:\s*"([^"]+)"/);
  
  let exists = false;
  if (coverMatch && coverMatch[1]) {
    const pubPath = path.join(process.cwd(), 'public', coverMatch[1]);
    exists = fs.existsSync(pubPath);
  }
  
  console.log(`${f.padEnd(25)} | ${dateMatch?dateMatch[1]:''} | ${exists ? 'OK' : 'MISSING'} | ${coverMatch?coverMatch[1]:'none'}`);
});

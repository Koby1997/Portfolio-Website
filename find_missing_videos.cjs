const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public', 'assets', 'projects');
const contentDir = path.join(process.cwd(), 'src', 'content', 'projects');

// Recursively get all videos in public
function getVideos(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getVideos(file));
    } else {
      if (/\.(mp4|webm|mov)$/i.test(file)) {
        // format to posix absolute path
        const relative = file.replace(path.join(process.cwd(), 'public'), '').replace(/\\/g, '/');
        results.push(relative);
      }
    }
  });
  return results;
}

const existingVideos = getVideos(publicDir);
console.log("Existing videos in public:\n" + existingVideos.join('\n'));
console.log("\n--- Checking references ---\n");

const mdFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
let missingCount = 0;

mdFiles.forEach(mdFile => {
  const content = fs.readFileSync(path.join(contentDir, mdFile), 'utf8');
  const refs = [];
  
  const coverMatch = content.match(/coverImage:\s*"([^"]+)"/);
  if (coverMatch) refs.push(coverMatch[1]);
  
  const srcMatches = content.matchAll(/<video[^>]*src="([^"]+)"/g);
  for (const match of srcMatches) {
    refs.push(match[1]);
  }

  refs.forEach(ref => {
    if (!existingVideos.includes(ref)) {
      console.log(`MISSING in ${mdFile}: ${ref}`);
      missingCount++;
    }
  });
});

if (missingCount === 0) {
  console.log("No missing references found.");
}

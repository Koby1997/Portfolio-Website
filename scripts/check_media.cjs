// Verifies every media path referenced by the project Markdown exists in /public.
// The check is case-sensitive: Windows ignores case locally, but Linux hosts do not,
// so "BevelTesting.mp4" vs "Beveltesting.mp4" works in dev and 404s in production.
// Usage: npm run check:media   (exits 1 if anything is missing)
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const contentDir = path.join(process.cwd(), 'src', 'content', 'projects');

// Case-sensitive existence check: compare against the real directory listing at each level
const existsExact = (urlPath) => {
  const parts = decodeURIComponent(urlPath).split('/').filter(Boolean);
  let dir = publicDir;
  for (const part of parts) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return false;
    if (!fs.readdirSync(dir).includes(part)) return false;
    dir = path.join(dir, part);
  }
  return true;
};

const findCaseInsensitive = (urlPath) => {
  const target = path.join(publicDir, decodeURIComponent(urlPath));
  const dir = path.dirname(target);
  if (!fs.existsSync(dir)) return null;
  const match = fs.readdirSync(dir).find(f => f.toLowerCase() === path.basename(target).toLowerCase());
  return match ? path.posix.join(path.posix.dirname(urlPath), match) : null;
};

let problems = 0;

fs.readdirSync(contentDir).filter(f => f.endsWith('.md')).forEach(mdFile => {
  const content = fs.readFileSync(path.join(contentDir, mdFile), 'utf8');
  const refs = new Set();

  for (const m of content.matchAll(/^(?:coverImage|heroImage):\s*"([^"]+)"/gm)) refs.add(m[1]);
  for (const m of content.matchAll(/\s(?:data-)?src="(\/[^"]+)"/g)) refs.add(m[1]);

  refs.forEach(ref => {
    if (existsExact(ref)) return;
    problems++;
    const near = findCaseInsensitive(ref);
    console.log(near
      ? `CASE MISMATCH in ${mdFile}: ${ref}  (file on disk: ${near})`
      : `MISSING in ${mdFile}: ${ref}`);
  });
});

console.log(problems === 0 ? 'All media references found.' : `\n${problems} problem(s) found.`);
process.exitCode = problems === 0 ? 0 : 1;

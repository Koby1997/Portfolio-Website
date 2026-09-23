// Rewrites media in project Markdown at build time so nothing downloads until it scrolls near the viewport.
// Videos: src -> data-src, autoplay removed, preload="none", tagged .lazy-media (played by src/scripts/lazyMedia.ts).
// Images: native lazy loading + async decoding.
//
// The project pages are hand-written HTML inside Markdown, which Astro keeps as `raw` nodes,
// so tags are rewritten as strings there (and as elements for anything written in plain Markdown).

const walk = (node, fn) => {
  fn(node);
  if (node.children) node.children.forEach(child => walk(child, fn));
};

const rewriteVideoTag = (tag) => {
  if (!/\ssrc=/.test(tag)) return tag;
  let out = tag
    .replace(/\ssrc=/, ' data-src=')
    .replace(/\sautoplay(?=[\s>\/])/, '');
  if (!/\spreload=/.test(out)) out = out.replace(/^<video/, '<video preload="none"');
  if (/\sclass="/.test(out)) {
    if (!/\sclass="[^"]*\blazy-media\b/.test(out)) out = out.replace(/\sclass="/, ' class="lazy-media ');
  } else {
    out = out.replace(/^<video/, '<video class="lazy-media"');
  }
  return out;
};

const rewriteImgTag = (tag) => {
  let out = tag;
  if (!/\sloading=/.test(out)) out = out.replace(/^<img/, '<img loading="lazy"');
  if (!/\sdecoding=/.test(out)) out = out.replace(/^<img/, '<img decoding="async"');
  return out;
};

const rewriteRawHtml = (html) =>
  html
    .replace(/<video\b[^>]*>/gi, rewriteVideoTag)
    .replace(/<img\b[^>]*>/gi, rewriteImgTag);

const addClass = (props, name) => {
  const existing = Array.isArray(props.className) ? props.className : props.className ? [props.className] : [];
  if (!existing.includes(name)) props.className = [name, ...existing];
};

export default function rehypeLazyMedia() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type === 'raw') {
        node.value = rewriteRawHtml(node.value);
        return;
      }
      if (node.type !== 'element') return;
      const props = node.properties || (node.properties = {});

      if (node.tagName === 'video' && props.src) {
        props.dataSrc = props.src;
        delete props.src;
        delete props.autoPlay;
        props.preload = 'none';
        addClass(props, 'lazy-media');
      }

      if (node.tagName === 'img') {
        if (!props.loading) props.loading = 'lazy';
        if (!props.decoding) props.decoding = 'async';
      }
    });
  };
}

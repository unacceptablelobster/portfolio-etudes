/* Parcourt assets/<code AC>/ et écrit assets-index.js (liste des fichiers par AC). Usage : node scripts/build.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), assets = path.join(root, 'assets');
const OK = /\.(png|jpe?g|gif|webp|svg|avif|pdf)$/i;
const index = {};
for (const d of fs.existsSync(assets) ? fs.readdirSync(assets) : []) {
  const p = path.join(assets, d);
  if (fs.statSync(p).isDirectory()) index[d] = fs.readdirSync(p).filter(f => OK.test(f)).sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }));
}
fs.writeFileSync(path.join(root, 'assets-index.js'),
  '/* Généré par scripts/build.js : ne pas modifier à la main */\nconst ASSETS_INDEX = ' + JSON.stringify(index, null, 1) + ';\n');

// Vérifications utiles
let warn = 0, total = 0;
try {
  const ctx = vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8') + ';this.P = PORTFOLIO;', ctx);
  for (const c of ctx.P.competences) for (const a of c.acs) {
    const found = index[a.code] || [];
    for (const f of a.fichiers || []) if (!found.includes(f.fichier)) { console.warn(`⚠ ${a.code} : "${f.fichier}" est déclaré mais absent de assets/${a.code}/`); warn++; }
    for (const s of a.sae || []) if (!(s in (ctx.P.saes || {}))) { console.warn(`⚠ ${a.code} : SAÉ "${s}" inconnue (liste "saes" de content.js)`); warn++; }
    total += found.length;
  }
} catch (e) { console.warn('⚠ content.js illisible :', e.message); warn++; }
console.log(`assets-index.js généré : ${Object.keys(index).length} dossiers, ${total} fichiers, ${warn} avertissement(s).`);

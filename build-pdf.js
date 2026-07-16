// Génère les PDF imprimables à partir des fichiers HTML du parcours.
// Usage : node build-pdf.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pages = [
  'index',
  'niveau-1-primaire-cp-ce1',
  'niveau-2-primaire-ce2-cm2',
  'niveau-3-college',
  'niveau-4-lycee',
  'niveau-5-terminale-bac',
  'guide-methode',
  'fiches-conjugaison',
];

(async () => {
  const outDir = path.join(__dirname, 'pdf');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const name of pages) {
    const htmlPath = 'file://' + path.join(__dirname, name + '.html');
    await page.goto(htmlPath, { waitUntil: 'networkidle' });
    // Ouvre tous les corrigés repliables pour qu'ils apparaissent dans le PDF.
    await page.evaluate(() => {
      document.querySelectorAll('details').forEach((d) => d.setAttribute('open', ''));
    });
    await page.pdf({
      path: path.join(outDir, name + '.pdf'),
      format: 'A4',
      printBackground: true,
      margin: { top: '14mm', bottom: '16mm', left: '12mm', right: '12mm' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate:
        '<div style="width:100%;font-size:9px;color:#888;text-align:center;">' +
        'Parcours de français · page <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    });
    console.log('✓ PDF généré :', name + '.pdf');
  }

  await browser.close();
  console.log('\\nTous les PDF sont dans le dossier pdf/.');
})();

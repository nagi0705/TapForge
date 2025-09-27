const fs = require('fs');
const path = require('path');

const components = [
  'ProblemsSolutions.astro',
  'Features.astro',
  'Benefits.astro',
  'SDGs.astro',
  'PartnerProgram.astro',
  'Testimonials.astro',
  'FAQ.astro'
];

components.forEach(component => {
  const filePath = path.join(__dirname, '../src/components', component);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Update imports
    content = content.replace(
      /import { getTranslation, type Language } from ["']\.\.\/lib\/i18n["'];?/,
      "import { loadTranslation, getLocaleFromPathname, createTranslator } from '../utils/i18n';\nimport type { Language } from '../lib/i18n';"
    );

    // Update the initialization code
    content = content.replace(
      /const { lang = ["']ja["'] } = Astro\.props as Props;\s*\n\s*const t = \(key: string\) => getTranslation\(lang, key\);/,
      `const { lang } = Astro.props as Props;
const locale = lang || getLocaleFromPathname(Astro.url.pathname);
const translations = await loadTranslation(locale);
const t = createTranslator(translations);`
    );

    // Alternative pattern
    content = content.replace(
      /const { lang = ["']ja["'] } = Astro\.props;\s*\n\s*const t = \(key: string\) => getTranslation\(lang, key\);/,
      `const { lang } = Astro.props;
const locale = lang || getLocaleFromPathname(Astro.url.pathname);
const translations = await loadTranslation(locale);
const t = createTranslator(translations);`
    );

    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${component}`);
  } else {
    console.log(`❌ ${component} not found`);
  }
});

console.log('Done!');
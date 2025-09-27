const fs = require('fs');
const path = require('path');

// Read the i18n.ts file
const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Extract translations object - this is a simple extraction
// In production, you might want to use a proper TypeScript parser
const translationsMatch = i18nContent.match(/export const translations = (\{[\s\S]*?\n\}\);/m);

if (!translationsMatch) {
  console.error('Could not find translations object');
  process.exit(1);
}

// Clean up the TypeScript syntax to make it valid JSON
let translationsStr = translationsMatch[1];

// Remove TypeScript syntax
translationsStr = translationsStr
  .replace(/as const;?$/, '')
  .replace(/: string/g, '')
  .replace(/\/\/.*$/gm, '') // Remove comments
  .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
  ;

// Try to evaluate the object (this is somewhat unsafe but okay for our controlled environment)
let translations;
try {
  // Use eval to parse the JavaScript object notation
  eval(`translations = ${translationsStr}`);
} catch (e) {
  console.error('Failed to parse translations:', e);
  // Fallback: manually extract each language
  const languages = ['ja', 'en', 'zh', 'ko', 'es'];
  translations = {};

  languages.forEach(lang => {
    // Try to extract each language section
    const langRegex = new RegExp(`${lang}:\\s*\\{([\\s\\S]*?)\\n\\s*\\},\\s*(?:${languages.join('|')}:|$)`, 'm');
    const langMatch = translationsStr.match(langRegex);

    if (langMatch) {
      try {
        eval(`translations.${lang} = {${langMatch[1]}}`);
      } catch (e) {
        console.error(`Failed to parse ${lang} translations:`, e);
      }
    }
  });
}

// Save each language to its own JSON file
const languages = ['ja', 'en', 'zh', 'ko', 'es'];

languages.forEach(lang => {
  if (translations[lang]) {
    const outputPath = path.join(__dirname, `../src/locales/${lang}/translation.json`);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(translations[lang], null, 2));
    console.log(`✅ Created ${outputPath}`);
  } else {
    console.error(`❌ No translations found for ${lang}`);
  }
});

console.log('Translation extraction complete!');
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const outputFile = path.join(projectRoot, 'GUARDIAN_CONNECT_CODEBASE.md');

// Extensions to include
const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.sql', '.toml', '.md', '.env'
]);

// Specific files/directories to exclude
const EXCLUDE_PATHS = [
  'node_modules',
  '.git',
  '.vercel',
  'dist',
  '.output',
  'package-lock.json',
  'skills-lock.json',
  '.env', // Exclude live secrets
  'GUARDIAN_CONNECT_CODEBASE.md',
  'PROJECT_CODEBASE.md',
  '.temp',
  'scripts/bundle-codebase.mjs',
  '.agents'
];

function isExcluded(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  for (const exc of EXCLUDE_PATHS) {
    if (normalized === exc || normalized.startsWith(exc + '/')) {
      return true;
    }
  }
  return false;
}

function getLanguage(ext) {
  switch (ext) {
    case '.ts':
    case '.tsx':
      return 'typescript';
    case '.js':
    case '.jsx':
    case '.mjs':
      return 'javascript';
    case '.json':
      return 'json';
    case '.css':
      return 'css';
    case '.html':
      return 'html';
    case '.sql':
      return 'sql';
    case '.toml':
      return 'toml';
    case '.md':
      return 'markdown';
    default:
      return 'text';
  }
}

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(projectRoot, fullPath);

    if (isExcluded(relPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      // Only include text extensions and specific files like .env.example
      if (TEXT_EXTENSIONS.has(ext) || entry.name === '.env.example' || entry.name === '.gitignore') {
        fileList.push({ fullPath, relPath, ext });
      }
    }
  }
  return fileList;
}

console.log('Gathering project files...');
const files = getAllFiles(projectRoot);
// Sort files alphabetically for clean navigation
files.sort((a, b) => a.relPath.localeCompare(b.relPath));

console.log(`Found ${files.length} files to consolidate.`);

let outputContent = `# PHOENIX / Guardian Connect — Complete Project Codebase\n\n`;
outputContent += `> Generated on ${new Date().toISOString()}\n`;
outputContent += `> Total Files: ${files.length}\n\n`;

outputContent += `## Table of Contents\n\n`;
for (const file of files) {
  const normalized = file.relPath.replace(/\\/g, '/');
  outputContent += `- [${normalized}](#file-${normalized.toLowerCase().replace(/[^a-z0-9]/g, '-')})\n`;
}
outputContent += `\n---\n\n`;

for (const file of files) {
  const normalized = file.relPath.replace(/\\/g, '/');
  const anchor = `file-${normalized.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  console.log(`Adding ${normalized}...`);

  try {
    const content = fs.readFileSync(file.fullPath, 'utf8');
    const lang = getLanguage(file.ext);

    outputContent += `<a id="${anchor}"></a>\n`;
    outputContent += `## File: \`${normalized}\`\n\n`;
    outputContent += '```' + lang + '\n';
    outputContent += content.trimEnd() + '\n';
    outputContent += '```\n\n---\n\n';
  } catch (err) {
    console.warn(`Could not read ${normalized}:`, err.message);
  }
}

fs.writeFileSync(outputFile, outputContent, 'utf8');
const stats = fs.statSync(outputFile);
console.log(`Successfully generated ${outputFile} (${(stats.size / 1024).toFixed(1)} KB) with ${files.length} files.`);

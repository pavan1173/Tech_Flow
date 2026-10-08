#!/usr/bin/env node

/**
 * Generate sitemap.xml for HackPath
 * Builds public/sitemap.xml from static routes plus all sheets, playlists,
 * and roadmap slugs in src/data.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://hackpath.in';
const TODAY = new Date().toISOString().split('T')[0];

// 1. Static Routes
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/preparation', priority: '0.9', changefreq: 'daily' },
  { path: '/roadmaps', priority: '0.9', changefreq: 'weekly' },
  { path: '/preparation/dsa-sheets', priority: '0.9', changefreq: 'weekly' },
  { path: '/preparation/company-wise-dsa-sheet', priority: '0.9', changefreq: 'weekly' },
  { path: '/preparation/20-essential-dsa-patterns', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/package-wise-dsa-sheet', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/sql-sheet', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/system-design-sheet', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/dsa-playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/dbms-playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/os-playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/oops-playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/system-design-playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/playlists', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/role-wise', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/most-asked-questions', priority: '0.8', changefreq: 'weekly' },
  { path: '/preparation/hr-questions', priority: '0.7', changefreq: 'weekly' },
  { path: '/preparation/cold-email-templates', priority: '0.7', changefreq: 'weekly' },
  { path: '/preparation/notes', priority: '0.7', changefreq: 'weekly' },
  { path: '/preparation/resume-templates', priority: '0.7', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
  { path: '/refund-policy', priority: '0.5', changefreq: 'monthly' },
];

function readDataFile(relativePath) {
  const fullPath = path.join(rootDir, relativePath);
  if (!fs.existsSync(fullPath)) return '';
  return fs.readFileSync(fullPath, 'utf8');
}

// 2. Extract DSA Sheet Slugs
function getDsaSheetRoutes() {
  const commonContent = readDataFile('src/data/common.ts');
  const routes = new Set();
  routes.add('/preparation/blind-75');

  // Match /preparation/dsa-sheets/:slug
  const hrefMatches = [...commonContent.matchAll(/\/preparation\/dsa-sheets\/([a-zA-Z0-9_-]+)/g)];
  for (const m of hrefMatches) {
    routes.add(`/preparation/dsa-sheets/${m[1]}`);
  }

  // Also match dsaSheetsList slugs
  const slugMatches = [...commonContent.matchAll(/\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  for (const m of slugMatches) {
    if (m[1].includes('sheet')) {
      routes.add(`/preparation/dsa-sheets/${m[1]}`);
    }
  }

  return Array.from(routes).map((p) => ({ path: p, priority: '0.8', changefreq: 'weekly' }));
}

// 3. Extract Company-Wise DSA Sheet Slugs
function getCompanySheetRoutes() {
  const commonContent = readDataFile('src/data/common.ts');
  const routes = new Set();

  const companyMatches = [...commonContent.matchAll(/\/preparation\/company-wise-dsa-sheet\/([a-zA-Z0-9_-]+)/g)];
  for (const m of companyMatches) {
    routes.add(`/preparation/company-wise-dsa-sheet/${m[1]}`);
  }

  return Array.from(routes).map((p) => ({ path: p, priority: '0.8', changefreq: 'weekly' }));
}

// 4. Extract Roadmap Slugs
function getRoadmapRoutes() {
  const roadmapsContent = readDataFile('src/data/roadmapsData.ts') + '\n' + readDataFile('src/data/allRoadmapsDirectory.ts');
  const routes = new Set();

  const slugMatches = [...roadmapsContent.matchAll(/slug:\s*['\"]([a-zA-Z0-9_-]+)['\"]|\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  for (const m of slugMatches) {
    const slug = m[1] || m[2];
    if (slug && slug.length > 1 && !slug.includes('sheet') && !slug.includes('playlist')) {
      routes.add(`/roadmaps/${slug}`);
      routes.add(`/preparation/roadmaps/${slug}`);
    }
  }

  return Array.from(routes).map((p) => ({ path: p, priority: '0.8', changefreq: 'weekly' }));
}

// 5. Extract Playlist Slugs
function getPlaylistRoutes() {
  const hyntsContent = readDataFile('src/data/hyntsPlaylistsData.ts');
  const coreContent = readDataFile('src/data/coreSubjectsData.ts');
  const dsaContent = readDataFile('src/data/dsaPlaylistsData.ts');
  const combined = hyntsContent + '\n' + coreContent + '\n' + dsaContent;

  const routes = new Set();
  const slugMatches = [...combined.matchAll(/slug:\s*['\"]([a-zA-Z0-9_-]+)['\"]|\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  
  for (const m of slugMatches) {
    const slug = m[1] || m[2];
    if (!slug) continue;

    if (slug.includes('dbms')) {
      routes.add(`/preparation/dbms-playlists/${slug}`);
    } else if (slug.includes('os')) {
      routes.add(`/preparation/os-playlists/${slug}`);
    } else if (slug.includes('oops')) {
      routes.add(`/preparation/oops-playlists/${slug}`);
    } else if (slug.includes('system-design') || slug.includes('hld') || slug.includes('lld')) {
      routes.add(`/preparation/system-design-playlists/${slug}`);
    } else if (slug.includes('dsa')) {
      routes.add(`/preparation/dsa-playlists/${slug}`);
    } else {
      routes.add(`/preparation/playlists/${slug}`);
    }
  }

  return Array.from(routes).map((p) => ({ path: p, priority: '0.7', changefreq: 'weekly' }));
}

// 6. Extract Role-wise, Most-asked & Cold Email Slugs
function getAdditionalContentRoutes() {
  const roleContent = readDataFile('src/data/roleWiseData.ts');
  const mostAskedContent = readDataFile('src/data/mostAskedQuestionsData.ts');
  const coldEmailContent = readDataFile('src/data/coldEmailTemplatesData.ts');

  const routes = new Set();

  // Role wise
  const roleMatches = [...roleContent.matchAll(/slug:\s*['\"]([a-zA-Z0-9_-]+)['\"]|\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  for (const m of roleMatches) {
    const slug = m[1] || m[2];
    if (slug) routes.add(`/preparation/role-wise/${slug}`);
  }

  // Most asked questions
  const maMatches = [...mostAskedContent.matchAll(/slug:\s*['\"]([a-zA-Z0-9_-]+)['\"]|\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  for (const m of maMatches) {
    const slug = m[1] || m[2];
    if (slug) routes.add(`/preparation/most-asked-questions/${slug}`);
  }

  // Cold email templates
  const ceMatches = [...coldEmailContent.matchAll(/slug:\s*['\"]([a-zA-Z0-9_-]+)['\"]|\"slug\":\s*\"([a-zA-Z0-9_-]+)\"/g)];
  for (const m of ceMatches) {
    const slug = m[1] || m[2];
    if (slug) routes.add(`/preparation/cold-email-templates/${slug}`);
  }

  return Array.from(routes).map((p) => ({ path: p, priority: '0.7', changefreq: 'weekly' }));
}

function buildSitemapXml(allEntries) {
  // Deduplicate by path
  const seen = new Set();
  const uniqueEntries = [];

  for (const entry of allEntries) {
    const normalized = entry.path.replace(/\/+$/, '') || '/';
    if (!seen.has(normalized)) {
      seen.add(normalized);
      uniqueEntries.push({ ...entry, path: normalized });
    }
  }

  const xmlItems = uniqueEntries.map((item) => {
    const loc = `${BASE_URL}${item.path === '/' ? '' : item.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${item.changefreq || 'weekly'}</changefreq>
    <priority>${item.priority || '0.7'}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems.join('\n')}
</urlset>
`;
}

async function main() {
  console.log('[Sitemap Generator] Compiling HackPath sitemap...');

  const allEntries = [
    ...STATIC_ROUTES,
    ...getDsaSheetRoutes(),
    ...getCompanySheetRoutes(),
    ...getRoadmapRoutes(),
    ...getPlaylistRoutes(),
    ...getAdditionalContentRoutes(),
  ];

  const xml = buildSitemapXml(allEntries);
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');

  const count = (xml.match(/<url>/g) || []).length;
  console.log(`[Sitemap Generator] Successfully generated ${count} URLs into ${outputPath}`);
}

main().catch((err) => {
  console.error('[Sitemap Generator Error]:', err);
  process.exit(1);
});

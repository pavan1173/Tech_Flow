import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Sitemap, Robots and Manifest SEO Unit Tests', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('validates public/robots.txt content and format', () => {
    const robotsPath = path.join(rootDir, 'public', 'robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);

    const content = fs.readFileSync(robotsPath, 'utf8');
    expect(content).toContain('User-agent: *');
    expect(content).toContain('Allow: /');
    expect(content).toContain('Sitemap: https://hackpath.in/sitemap.xml');
  });

  it('validates public/manifest.json structure', () => {
    const manifestPath = path.join(rootDir, 'public', 'manifest.json');
    expect(fs.existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    expect(manifest.name).toBe('HackPath');
    expect(manifest.short_name).toBe('HackPath');
    expect(manifest.display).toBe('standalone');
    expect(manifest.start_url).toBe('/');
    expect(manifest.theme_color).toBe('#07090e');
    expect(Array.isArray(manifest.icons)).toBe(true);
    expect(manifest.icons.length).toBeGreaterThan(0);
  });

  it('validates public/sitemap.xml contains core and legal routes', () => {
    const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
    expect(fs.existsSync(sitemapPath)).toBe(true);

    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    expect(sitemap).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

    // Core routes
    expect(sitemap).toContain('<loc>https://hackpath.in</loc>');
    expect(sitemap).toContain('<loc>https://hackpath.in/preparation</loc>');
    expect(sitemap).toContain('<loc>https://hackpath.in/roadmaps</loc>');

    // Legal routes
    expect(sitemap).toContain('<loc>https://hackpath.in/privacy</loc>');
    expect(sitemap).toContain('<loc>https://hackpath.in/terms</loc>');
    expect(sitemap).toContain('<loc>https://hackpath.in/refund-policy</loc>');

    // DSA Sheet routes
    expect(sitemap).toContain('<loc>https://hackpath.in/preparation/dsa-sheets</loc>');
  });
});

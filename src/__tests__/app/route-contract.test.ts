import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 * Route contract guard (D4).
 *
 * Every in-app redirect target must resolve to a page implementation. Before
 * this guard existed, a successful login pushed `/dashboard`, which had no
 * page, so every authed user landed on the 404 surface.
 */

const projectRoot = join(__dirname, '../../..');
const appDir = join(projectRoot, 'src/app');

function collectFiles(dir: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);

    if (statSync(fullPath).isDirectory()) {
      files.push(...collectFiles(fullPath));
      continue;
    }

    if (/\.(ts|tsx)$/.test(entry)) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Route groups (`(auth)`) do not appear in the URL, so they are skipped when
 * mapping a page file to its route.
 */
function routeForPageFile(filePath: string): string {
  const relative = filePath.slice(appDir.length + 1).split(/[\\/]/);
  const segments = relative.slice(0, -1).filter((segment) => !/^\(.*\)$/.test(segment));
  return `/${segments.join('/')}`;
}

function implementedRoutes(): string[] {
  return collectFiles(appDir)
    .filter((file) => file.endsWith('page.tsx'))
    .map(routeForPageFile);
}

describe('Route contract', () => {
  const srcDir = join(projectRoot, 'src');
  const appSources = collectFiles(srcDir).filter(
    (file) =>
      !file.includes(`${join('__tests__')}`) &&
      !file.includes(`${join('src', 'generated')}`) &&
      !file.endsWith('route.ts')
  );

  it('should have app sources to scan', () => {
    expect(appSources.length).toBeGreaterThan(0);
  });

  it('should resolve every in-app redirect target to a page implementation', () => {
    const routes = implementedRoutes();
    const missing: string[] = [];
    const seen = new Set<string>();

    for (const file of appSources) {
      const source = readFileSync(file, 'utf-8');
      const targets = [
        ...source.matchAll(/router\.(?:push|replace)\('([^']+)'\)/g),
        ...source.matchAll(/url\.pathname\s*=\s*'([^']+)'/g),
      ].map((match) => match[1]);

      for (const target of targets) {
        if (seen.has(target)) {
          continue;
        }
        seen.add(target);

        if (!routes.includes(target)) {
          missing.push(target);
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it('should have a page for the post-login landing route', () => {
    expect(existsSync(join(appDir, 'dashboard', 'page.tsx'))).toBe(true);
  });
});

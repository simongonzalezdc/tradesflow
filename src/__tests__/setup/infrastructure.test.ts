import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Infrastructure', () => {
  const projectRoot = join(__dirname, '../../..');

  describe('TypeScript Configuration', () => {
    it('should have tsconfig.json file', () => {
      const tsconfigPath = join(projectRoot, 'tsconfig.json');
      expect(existsSync(tsconfigPath)).toBe(true);
    });

    it('should have valid TypeScript configuration', () => {
      const tsconfigPath = join(projectRoot, 'tsconfig.json');
      const tsconfigContent = readFileSync(tsconfigPath, 'utf-8');
      const tsconfig = JSON.parse(tsconfigContent);

      expect(tsconfig).toBeDefined();
      expect(tsconfig.compilerOptions).toBeDefined();
      expect(tsconfig.compilerOptions.target).toBeDefined();
      expect(tsconfig.compilerOptions.strict).toBe(true);
    });

    it('should have Next.js plugin configured', () => {
      const tsconfigPath = join(projectRoot, 'tsconfig.json');
      const tsconfigContent = readFileSync(tsconfigPath, 'utf-8');
      const tsconfig = JSON.parse(tsconfigContent);

      expect(tsconfig.compilerOptions.plugins).toBeDefined();
      expect(tsconfig.compilerOptions.plugins.some((p: { name: string }) => p.name === 'next')).toBe(true);
    });
  });

  describe('Tailwind CSS Configuration', () => {
    it('should have tailwind.config.js file', () => {
      const tailwindPath = join(projectRoot, 'tailwind.config.js');
      expect(existsSync(tailwindPath)).toBe(true);
    });

    it('should configure content paths for Tailwind', () => {
      const tailwindPath = join(projectRoot, 'tailwind.config.js');
      const tailwindConfig = require(tailwindPath);

      expect(tailwindConfig.content).toBeDefined();
      expect(Array.isArray(tailwindConfig.content)).toBe(true);
      expect(tailwindConfig.content.length).toBeGreaterThan(0);
    });
  });

  describe('PostCSS Configuration', () => {
    it('should have postcss.config.js file', () => {
      const postcssPath = join(projectRoot, 'postcss.config.js');
      expect(existsSync(postcssPath)).toBe(true);
    });

    it('should have tailwindcss plugin in PostCSS config', () => {
      const postcssPath = join(projectRoot, 'postcss.config.js');
      const postcssConfig = require(postcssPath);

      expect(postcssConfig.plugins).toBeDefined();
      expect(postcssConfig.plugins.tailwindcss).toBeDefined();
      expect(postcssConfig.plugins.autoprefixer).toBeDefined();
    });
  });

  describe('Environment Configuration', () => {
    it('should have .env.example file', () => {
      const envExamplePath = join(projectRoot, '.env.example');
      expect(existsSync(envExamplePath)).toBe(true);
    });

    it('should define required environment variables in example', () => {
      const envExamplePath = join(projectRoot, '.env.example');
      const envContent = readFileSync(envExamplePath, 'utf-8');

      expect(envContent).toContain('DATABASE_URL');
      expect(envContent).toContain('NEXTAUTH_SECRET');
      expect(envContent).toContain('NEXTAUTH_URL');
    });
  });

  describe('Docker Configuration', () => {
    it('should have docker-compose.yml file', () => {
      const dockerPath = join(projectRoot, 'docker-compose.yml');
      expect(existsSync(dockerPath)).toBe(true);
    });

    it('should configure PostgreSQL service', () => {
      const dockerPath = join(projectRoot, 'docker-compose.yml');
      const dockerContent = readFileSync(dockerPath, 'utf-8');

      expect(dockerContent).toContain('postgres:');
      expect(dockerContent).toContain('image: postgres');
      expect(dockerContent).toContain('POSTGRES_DB');
    });
  });

  describe('Project Structure', () => {
    it('should have src/app directory', () => {
      const srcAppPath = join(projectRoot, 'src/app');
      expect(existsSync(srcAppPath)).toBe(true);
    });

    it('should have src/components directory', () => {
      const componentsPath = join(projectRoot, 'src/components');
      expect(existsSync(componentsPath)).toBe(true);
    });

    it('should have src/lib directory', () => {
      const libPath = join(projectRoot, 'src/lib');
      expect(existsSync(libPath)).toBe(true);
    });

    it('should have src/types directory', () => {
      const typesPath = join(projectRoot, 'src/types');
      expect(existsSync(typesPath)).toBe(true);
    });

    it('should have prisma directory', () => {
      const prismaPath = join(projectRoot, 'prisma');
      expect(existsSync(prismaPath)).toBe(true);
    });
  });
});

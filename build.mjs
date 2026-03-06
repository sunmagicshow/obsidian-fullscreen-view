// build.mjs
/* global console */
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';

// 构建主文件
await build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'main.js',
  platform: 'node',
  target: 'node16',
  external: ['fs', 'path', 'electron', 'obsidian'],
  format: 'cjs',
  minify: false,
  sourcemap: true,
  treeShaking: true,
  legalComments: 'none',
});

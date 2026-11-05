import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: false, // Astro 7 strips spaces between inline elements otherwise
  vite: { plugins: [tailwindcss()] },});

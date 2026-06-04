import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Repository: hirrok/landmark-restaurant-simulator
// GitHub Pages URL: https://hirrok.github.io/landmark-restaurant-simulator/
// Architecture: Independent simulator repo — hub-and-spoke governance v1.0
export default defineConfig({
  integrations: [tailwind()],
  base: '/landmark-restaurant-simulator',
  trailingSlash: 'always',
  output: 'static',
});

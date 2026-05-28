import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    body: {
      bg: '#0D0D0F',
      color: '#FFFFFF',
      fontFamily: "'Syne', sans-serif",
    },
  },
});

export const system = createSystem(defaultConfig, config);

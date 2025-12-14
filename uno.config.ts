import { defineConfig, presetAttributify, presetWind3 } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(html|astro|[jt]sx?|ts)($|\?)/],
    },
  },
  presets: [presetWind3(), presetAttributify()],
});

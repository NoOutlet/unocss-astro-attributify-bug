import { defineConfig, presetAttributify, presetWind3 } from "unocss";

const breakpoints = {
  "2xs": "320px",
  xs: "375px",
  sm: "480px",
  tablet: "600px",
  md: "768px",
  lg: "1024px",
  desktop: "1280px",
  xl: "1440px",
  "2xl": "1600px", // max content width
  "3xl": "1920px",
  "4xl": "2560px",
};

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(html|astro|[jt]sx?|ts)($|\?)/],
    },
  },
  presets: [presetWind3(), presetAttributify()],
  theme: {
    breakpoints,
  },
});

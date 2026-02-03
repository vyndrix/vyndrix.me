import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "en-US",
  locales: ["pt-BR", "en-US"],
  catalogs: [
    {
      path: "<rootDir>/src/i18n/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});
